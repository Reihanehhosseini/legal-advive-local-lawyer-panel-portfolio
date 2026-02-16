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
import { ChevronDown } from 'lucide-react';

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
      list: [],
    },
    {
      id: 2,
      isLink: false,
      lable: 'اطلاعات من',
      href: '/profile',
      icon: <CircleUserIcon />,
      list: [
        { id: 1, label: 'اطلاعات شخصی', href: '/profile/personal-information' },
        { id: 2, label: 'اطلاعات هویتی', href: '/profile/personal-Identity' },
        { id: 3, label: 'موقعیت محل کار', href: '/profile/WorkPlace-Location' },
        { id: 4, label: 'مهارت های کاری', href: '/profile/Work-Skills' },
        {
          id: 5,
          label: 'سوابق تحصیلی',
          href: '/profile/Educational-Background',
        },
        { id: 6, label: 'سوابق کاری', href: '/profile/Work-History' },
      ],
    },
    {
      id: 3,
      isLink: true,
      lable: 'پیام رسان',
      href: '/chat',
      icon: <ChatIcon />,
      list: [],
    },
    {
      id: 4,
      isLink: true,
      lable: 'سفارش ها',
      href: '/orders',
      icon: <LockIcon />,
      list: [],
    },
    {
      id: 5,
      isLink: true,
      lable: 'تقویم کاری',
      href: '/work-calendar',
      icon: <LockIcon />,
      list: [],
    },
    {
      id: 6,
      isLink: false,
      lable: 'پرسش و پاسخ حقوقی',
      href: '/faq',
      icon: <FaqIcon />,
      list: [
        {
          id: 1,
          label: 'درخواست مشاوره رایگان',
          href: '/faq/request-consultation',
        },
        { id: 2, label: 'پرسش ها', href: '/faq/questions' },
        { id: 3, label: 'پاسخ ها', href: '/faq/answers' },
      ],
    },
    {
      id: 7,
      isLink: false,
      lable: 'ارزیابی های حقوقی',
      href: '/legal-assessments',
      icon: <CourtIcon />,
      list: [
        { id: 1, label: 'مدیریت خدمت', href: '#' },
        { id: 2, label: 'لیست درخواست های ارزیابی', href: '#' },
      ],
    },
    {
      id: 8,
      isLink: false,
      lable: 'لیست درخواست های ارزیابی',
      href: '/legal-assessments',
      icon: <CourtIcon />,
      list: [
        { id: 1, label: 'کیف پول', href: '#' },
        { id: 2, label: 'درخواست تسویه موجودی', href: '#' },
      ],
    },
    {
      id: 9,
      isLink: true,
      lable: 'امور مالی',
      href: '/financal',
      icon: <WalletIcon />,
      list: [],
    },
    {
      id: 10,
      isLink: true,
      lable: 'دیدگاه ها',
      href: '/reviews',
      icon: <CommentsIcon />,
      list: [],
    },
    {
      id: 11,
      isLink: true,
      lable: 'پشتیبانی',
      href: '/support',
      icon: <SupportIcon />,
      list: [],
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Content */}
      <main className="mb-14 mr-5 lg:mr-0">
        <Breadcrumb
          items={[
            { label: 'پنل کاربری', href: '/' },
            { label: 'داشبورد', href: '/' },
          ]}
        />
        <div className="flex gap-x-1 max-w-360 mx-auto min-h-screen">
          <div className="mr-4 min-w-60 xl:min-w-75 h-fit rounded-2xl sticky top-8 z-66 border border-global-3 hidden lg:block">
            {/* user info box */}
            <div className="border-b border-global-3 p-4 flex gap-x-6 lg:gap-x-4">
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
                      <div className="w-full">
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
                        ) : !i.isLink && i.href === i.href ? (
                          <SimpleAccordion
                            nameTitle={i.href}
                            title={
                              <button
                                type="button"
                                onClick={(e) => {
                                  if (location.pathname === i.href) {
                                    e.preventDefault();
                                  }
                                }}
                                className={`flex items-center justify-between gap-x-4 font-thin w-full py-1.5 px-2.5 rounded-2xl ${
                                  isActive ? 'bg-global-5' : 'bg-white'
                                }`}
                              >
                                <div className="flex items-center gap-x-4">
                                  <div
                                    className={`w-9 h-9 ${
                                      isActive ? 'bg-white' : 'bg-global-5'
                                    } rounded-full flex items-center justify-center text-white`}
                                  >
                                    <div
                                      className={`${
                                        isActive
                                          ? 'text-primary!'
                                          : 'text-white'
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
                                </div>
                                <ChevronDown
                                  size={20}
                                  className="text-global-7"
                                />
                              </button>
                            }
                          >
                            <div className="flex flex-col gap-2 text-sm">
                              {i.list && i.list.length > 0
                                ? i.list.map((i) => {
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
                        ) : null}
                      </div>
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
          <div className="w-full ml-4">
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
