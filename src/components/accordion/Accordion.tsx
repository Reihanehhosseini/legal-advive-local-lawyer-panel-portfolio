'use client';

import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  titleClassName?: string;
}

export default function Accordion({
  title,
  children,
  action,
  titleClassName,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${action ? '' : 'group'} w-full overflow-hidden mb-4`}>
      {/* Header */}
      <div className="relative flex items-center justify-between">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex justify-between items-center px-4 py-3 text-right font-medium relative hover:text-secondary transition-all duration-200 ease-linear"
        >
          <span className="group-hover:text-secondary group-hover:ms-0.5 transition-all duration-200 ease-in-out flex items-center gap-1">
            <span className={titleClassName}>{title}</span>
            {action ? (
              <motion.span
                className="pt-1"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown
                  size={18}
                  className={`group-hover:text-secondary transition-all duration-200 ease-linear ${titleClassName}`}
                />
              </motion.span>
            ) : (
              action
            )}
          </span>

          {action ? null : (
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown
                size={18}
                className={`group-hover:text-secondary transition-all duration-200 ease-linear ${titleClassName}`}
              />
            </motion.span>
          )}
        </button>
        {action && <div>{action}</div>}
      </div>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm border-y border-global-3/20 bg-red text-white p-4 rounded-lg">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
