import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import Breadcrumb from '../components/breadcrumbs/Breadcrumb';
import { person_1 } from '../assets/images/dev';
import {
  ChatIcon,
  CircleUserIcon,
  CommentsIcon,
  CourtIcon,
  DashboardIcon,
  FaqIcon,
  LockIcon,
  LogoutIcon,
  SupportIcon,
  WalletIcon,
} from '../components/ui/icons';
import MobileNavigationLinks from '../components/layouts/mobile/MobileNavigationLinks';
import isRouteActive from '../utils/isLinkActive';
import SimpleAccordion from '../components/accordion/SimpleAccordion';

export default function MainLayout() {
  // ===============================================================================================================|
  // ===========================================>Hooks<=============================================================|
  // ===============================================================================================================|

  const location = useLocation();

  // ===============================================================================================================|
  // ===========================================>Static Links<======================================================|
  // ===============================================================================================================|
  const links = [
    {
      id: 1,
      isLink: true,
      lable: 'میزکار من',
      href: '/',
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      isLink: true,
      lable: 'اطلاعات من',
      href: '/profile',
      icon: <CircleUserIcon />,
    },
    {
      id: 3,
      isLink: true,
      lable: 'پیام رسان',
      href: '/chat',
      icon: <ChatIcon />,
    },
    {
      id: 4,
      isLink: true,
      lable: 'سفارش ها',
      href: '/orders',
      icon: <LockIcon />,
    },
    {
      id: 5,
      isLink: false,
      lable: 'پرسش و پاسخ حقوقی',
      href: '/faq',
      icon: <FaqIcon />,
    },
    {
      id: 6,
      isLink: true,
      lable: 'ارزیابی های حقوقی',
      href: '/legal-assessments',
      icon: <CourtIcon />,
    },
    {
      id: 7,
      isLink: true,
      lable: 'امور مالی',
      href: '/financal',
      icon: <WalletIcon />,
    },
    {
      id: 8,
      isLink: true,
      lable: 'دیدگاه ها',
      href: '/reviews',
      icon: <CommentsIcon />,
    },
    {
      id: 9,
      isLink: true,
      lable: 'پشتیبانی',
      href: '/support',
      icon: <SupportIcon />,
    },
  ];

  const faqLinks = [
    {
      id: 1,
      label: 'درخواست مشاوره رایگان',
      href: '/faq/request-consultation',
    },
    { id: 2, label: 'پرسش ها', href: '/faq/questions' },
    { id: 3, label: 'پاسخ ها', href: '/faq/answers' },
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="mb-14">
        <Breadcrumb
          items={[
            { label: 'پنل کاربری', href: '/' },
            { label: 'داشبورد', href: '/' },
          ]}
        />
        <div className="flex gap-x-6 max-w-360 mx-auto min-h-screen">
          <div className="min-w-80 h-fit rounded-2xl sticky top-8 z-66 border border-global-3 hidden lg:block">
            {/* user info box */}
            <div className="border-b border-global-3 p-4 flex gap-x-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={person_1}
                  alt="عکس کاربر"
                  className="object-cover bg-center"
                />
              </div>
              <div className="mb-1">
                <p className="text-base mb-1 text-global-7">میلاد امینی</p>
                <p className="text-xs font-light text-text-secondary mb-1">
                  موکل
                </p>
                <p className="text-xs font-light text-text-secondary">
                  شماره موبایل{' '}
                  <span className="tracking-[4px] inline-block">
                    09131234567
                  </span>
                </p>
              </div>
            </div>
            {/* Links */}

            <div className="flex flex-col gap-y-1.5 items-start justify-center px-3 py-1">
              {links && links.length > 0
                ? links.map((i) => {
                    console.log(location.pathname);
                    const isActive = isRouteActive(i.href, location.pathname);

                    return (
                      <>
                        {i.isLink ? (
                          <Link
                            to={i.href}
                            key={i.id}
                            className={`flex items-center gap-x-4 font-thin w-full py-1.5 px-2.5 rounded-2xl ${
                              isActive ? 'bg-global-5' : ''
                            }`}
                          >
                            <div
                              className={`w-9 h-9 ${
                                isActive ? 'bg-white' : 'bg-global-5'
                              } rounded-full flex items-center justify-center text-white`}
                            >
                              <div
                                className={`${
                                  isActive ? 'text-primary!' : 'text-white'
                                }`}
                              >
                                {i.icon}
                              </div>
                            </div>
                            <span
                              className={`${
                                isActive
                                  ? 'text-white font-bold'
                                  : 'text-global-7'
                              }`}
                            >
                              {i.lable}
                            </span>
                          </Link>
                        ) : (
                          <SimpleAccordion
                            title={
                              <Link
                                to={`/faq`}
                                onClick={(e) => {
                                  if (location.pathname === '/faq') {
                                    e.preventDefault();
                                  }
                                }}
                                className={`flex items-center gap-x-4 font-thin w-full py-1.5 px-2.5 rounded-2xl ${
                                  isActive ? 'bg-global-5' : ''
                                }`}
                              >
                                <div
                                  className={`w-9 h-9 ${
                                    isActive ? 'bg-white' : 'bg-global-5'
                                  } rounded-full flex items-center justify-center text-white`}
                                >
                                  <div
                                    className={`${
                                      isActive ? 'text-primary!' : 'text-white'
                                    }`}
                                  >
                                    <FaqIcon />
                                  </div>
                                </div>
                                <span
                                  className={`${
                                    isActive
                                      ? 'text-white font-bold'
                                      : 'text-global-7'
                                  }`}
                                >
                                  پرسش و پاسخ حقوقی
                                </span>
                              </Link>
                            }
                          >
                            <div className="flex flex-col gap-2 text-sm">
                              {faqLinks && faqLinks.length > 0
                                ? faqLinks.map((i) => {
                                    const isActive =
                                      location.pathname === i.href;

                                    return (
                                      <Link
                                        key={i.id}
                                        to={i.href}
                                        className={`${
                                          isActive ? 'bg-global-12' : ' '
                                        } py-3 rounded-2xl px-2 font-light text-global-1`}
                                      >
                                        {i.label}
                                      </Link>
                                    );
                                  })
                                : null}
                            </div>
                          </SimpleAccordion>
                        )}
                      </>
                    );
                  })
                : null}
              <button className="flex items-center gap-x-4 font-thin w-full py-1.5 px-2.5 rounded-2xl">
                <div className="w-9 h-9 bg-global-16 rounded-full flex items-center justify-center text-global-19">
                  <LogoutIcon />
                </div>
                <span className="text-global-7">خروج از حساب کاربری</span>
              </button>
            </div>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Navigation Bar => Mobile */}
      <MobileNavigationLinks />
      {/* Footer */}
      <Footer />
    </div>
  );
}
