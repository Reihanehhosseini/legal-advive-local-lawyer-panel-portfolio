import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbsProps) {
  return (
    <div className="max-w-360 mx-auto flex items-center gap-2 text-text-secondary text-xs md:text-sm ps-4 my-4 font-light">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const showSlash = !isLast && items[index + 1]?.href !== '#';

        return (
          <span key={item.href + index} className="flex items-center gap-2">
            {item.href === '#' ? (
              <span>{item.label}</span>
            ) : (
              <Link to={item.href} className="hover:text-secondary">
                {item.label}
              </Link>
            )}
            {showSlash && <span>/</span>}
          </span>
        );
      })}
    </div>
  );
}
