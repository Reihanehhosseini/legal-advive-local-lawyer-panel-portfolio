import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeIcon, PersonIcon, PersonsIcon, SearchIcon } from '../../ui/icons';

export default function MobileNavigationLinks() {
  // =============================================================================================================|
  // ===========================================default=============================================================|
  // =============================================================================================================|

  const links = [
    { id: 1, title: 'خانه', href: '/', icon: <HomeIcon /> },
    { id: 2, title: 'حساب کاربری', href: '/', icon: <PersonIcon /> },
    { id: 3, title: 'دریافت مشاوره', href: '/', icon: <PlusCircle /> },
    { id: 4, title: 'وکلا', href: '/', icon: <PersonsIcon /> },
    { id: 5, title: 'سفارش ها', href: '/', icon: <SearchIcon /> },
  ];

  return (
    <div className="fixed lg:hidden bottom-0 left-0 py-3 px-2 bg-white w-full z-100">
      <ul className="grid grid-cols-5">
        {links && links.length > 0
          ? links.map((i) => {
              return (
                <li key={i.id} className="flex items-center justify-center">
                  <Link
                    to={i.href}
                    className="flex flex-col justify-center items-center text-center gap-1 text-xs text-text-secondary"
                  >
                    <span>{i.icon}</span>
                    {i.title}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
