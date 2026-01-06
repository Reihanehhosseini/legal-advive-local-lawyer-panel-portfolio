import React, { useState, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import clsx from 'clsx';

// تعریف تیپ برای options
interface Option {
  id: string | number;
  key: string | number;
  value: string | number;
}

// تعریف props برای کامپوننت
interface DropdownProps {
  options: Option[];
  selectedId?: string | number; // اختیاری
  onSelect: (value: string) => void;
  icon?: ReactNode;
  hover?: boolean; // اختیاری، default false
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedId,
  onSelect,
  hover = false,
  icon = null,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Option | undefined>(
    options.find((opt) => String(opt.id) === String(selectedId)) || options[0] // پیشفرض: اگر selectedId نبود، اولین ایتم
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelect = (item: Option) => {
    setSelectedItem(item);
    onSelect(String(item.value)); // value رو برمی‌گردونه
    setIsOpen(false);
  };

  // برای بستن لیست اگر بیرون کلیک شد
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', width: 200 }}>
      {/* دکمه اصلی */}
      <motion.button
        onClick={toggleOpen}
        {...(hover
          ? {
              onMouseEnter: () => setIsOpen(true),
              onMouseLeave: () => setIsOpen(false),
            }
          : {})}
        className={clsx(
          `w-full py-2 px-3 bg-global-12 border border-global-3 flex items-center justify-between`,
          isOpen ? 'rounded-t-3xl' : 'rounded-full'
        )}
      >
        <div className="flex items-center gap-x-2.5">
          {icon ? icon : null}
          <span>{selectedItem ? selectedItem.key : 'انتخاب کنید'}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} // چرخش بر اساس isOpen
          transition={{ duration: 0.2 }} // انیمیشن نرم
        >
          <HiChevronDown size={18} className="text-text-secondary" />
        </motion.div>
      </motion.button>

      {/* لیست ایتم‌ها */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border border-global-3 z-10 max-h-52 overflow-y-auto"
          >
            {options.map((item) => (
              <motion.li
                key={item.id}
                onClick={() => handleSelect(item)}
                whileHover={{ backgroundColor: '#f5f6fa' }}
                className="p-2"
              >
                {item.key}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
