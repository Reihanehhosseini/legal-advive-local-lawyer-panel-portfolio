import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type SimpleAccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

const SimpleAccordion: React.FC<SimpleAccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/faq')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location]);

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer select-none"
      >
        {title}
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-125 mt-2' : 'max-h-0'
        }`}
      >
        {isOpen && <div className="pt-2">{children}</div>}
      </div>
    </div>
  );
};

export default SimpleAccordion;
