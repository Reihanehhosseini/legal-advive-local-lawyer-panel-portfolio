import { Bell, Menu } from 'lucide-react';
import { LogoSVG } from '../../ui/icons';
import NavigationLinks from './components/NavigationLinks';
import Login from './components/Login';

export default function Header() {
  return (
    // sticky header =>>> lg:sticky top-0
    <header className="pt-10 lg:pt-4 lg:pb-4 px-4 lg:px-12 relative bg-global-4/30 rounded-3xl pb-2 lg:rounded-b-full shadow-lg shadow-black/5 z-500">
      <div className="flex items-center justify-between max-w-360 mx-auto">
        {/* کامپوننت همبرگر منو */}
        <button className="block lg:hidden text-primary">
          <Menu />
        </button>
        {/* کامپوننت لوگو سایت */}
        <LogoSVG />
        {/* کامپوننت ناوبری هدر */}
        <NavigationLinks />
        <div>
          {/* کامپوننت ورود و ثبت نام */}
          <Login />
          {/* کامپوننت اعلان ها */}
          <button className="block lg:hidden">
            <Bell strokeWidth={1.5} className="text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}
