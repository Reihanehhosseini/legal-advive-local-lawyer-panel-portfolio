import { Link } from "react-router-dom";

export default function NavigationLinks() {
  const links = [
    { id: 1, title: 'صفحه‌ی اصلی', href: '/' },
    { id: 2, title: 'دریافت مشاوره', href: '/legal-consultation' },
    { id: 3, title: 'وکلا', href: '/lawyers' },
    { id: 4, title: 'درباره ما', href: '/about-us' },
    { id: 5, title: 'ارتباط با ما', href: '/contact-us' },
  ];

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10 text-primary">
        {links && links.length > 0
          ? links.map((i) => (
              <li key={i.id}>
                <Link
                  to={i.href}
                  className="hover:text-secondary transition-all duration-200 ease-linear"
                >
                  {i.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
}
