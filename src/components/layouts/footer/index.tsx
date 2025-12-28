import { Link } from 'react-router-dom';
import Accordion from '../../accordion/Accordion';
import {
  FacebookIcon,
  InstagramIcon,
  LogoSVG,
  TelegramIcon,
  XIcon,
} from '../../ui/icons';

export default function Footer() {
  const cooperationData = {
    title: 'همکاری با ما',
    links: [
      { id: 1, label: 'پروفایل وکیل', href: '#' },
      { id: 2, label: 'راهنمای سریع وکیل', href: '#' },
      { id: 3, label: 'تبلیغات حقوقی وکیل', href: '#' },
    ],
  };
  const servicesData = {
    title: 'خدمات',
    links: [
      { id: 1, label: 'جستجوی وکیل', href: '#' },
      { id: 2, label: 'مشاوره حقوقی', href: '#' },
      { id: 3, label: 'مشاوره حقوقی آنلاین رایگان', href: '#' },
      { id: 4, label: 'مشاوره حقوقی تلفنی', href: '#' },
      { id: 5, label: 'مشاوره حقوقی آنلاین', href: '#' },
    ],
  };
  const legalServices = {
    title: 'خدمات حقوقی مکتوب',
    links: [
      { id: 1, label: 'تنظیم قرارداد', href: '#' },
      { id: 2, label: 'تنظیم اوراق قضایی', href: '#' },
      { id: 3, label: 'تنظیم دادخواست', href: '#' },
      { id: 4, label: 'تنظیم شکواییه', href: '#' },
      { id: 5, label: 'تنظیم لایحه', href: '#' },
      { id: 6, label: 'تنظیم اظهارنامه', href: '#' },
    ],
  };
  const quickAccess = {
    title: 'دسترسی سریع',
    links: [
      { id: 1, label: 'همکاری با ما', href: '#' },
      { id: 2, label: 'مقالات حقوقی', href: '#' },
      { id: 3, label: 'خدمات با ما', href: '#' },
      { id: 4, label: 'ارتباط با ما', href: '#' },
    ],
  };

  const socialMedia = [
    { id: 1, icon: <FacebookIcon />, href: '#' },
    { id: 2, icon: <XIcon />, href: '#' },
    { id: 3, icon: <InstagramIcon />, href: '#' },
    { id: 4, icon: <TelegramIcon />, href: '#' },
  ];

  return (
    <footer className="bg-primary py-6 px-4 sm:px-6 md:px-8 lg:py-10 lg:px-12 text-white">
      {/* Dekstop Footer */}
      <div className="max-w-360 mx-auto hidden lg:grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <LogoSVG className="mb-4" />
          <p className="max-w-55">
            ارائه‌دهنده خدمات حقوقی تخصصی، تنظیم اسناد و مشاوره توسط وکلای پایه
            یک دادگستری
          </p>
        </div>
        {/* Cooperation */}
        <div className="col-span-1">
          <p className="mb-4 font-bold text-base">{cooperationData.title}</p>
          <ul className="grid gap-4 font-light">
            {cooperationData && cooperationData.links.length > 0
              ? cooperationData.links.map((i) => (
                  <li key={i.id}>
                    <Link
                      to={i.href}
                      className="hover:text-secondary transition-all duration-200 ease-linear"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        {/* Services */}
        <div className="col-span-1">
          <p className="mb-4 font-bold text-base">{servicesData.title}</p>
          <ul className="grid gap-4 font-light">
            {servicesData && servicesData.links.length > 0
              ? servicesData.links.map((i) => (
                  <li key={i.id}>
                    <Link
                      to={i.href}
                      className="hover:text-secondary transition-all duration-200 ease-linear"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        {/* Legal Services */}
        <div className="col-span-1">
          <p className="mb-4 font-bold text-base">{legalServices.title}</p>
          <ul className="grid gap-4 font-light">
            {legalServices && legalServices.links.length > 0
              ? legalServices.links.map((i) => (
                  <li key={i.id}>
                    <Link
                      to={i.href}
                      className="hover:text-secondary transition-all duration-200 ease-linear"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
        {/* Quick Access */}
        <div className="col-span-1 relative">
          <p className="mb-4 font-bold text-base">{quickAccess.title}</p>
          <ul className="grid gap-4 font-light">
            {quickAccess && quickAccess.links.length > 0
              ? quickAccess.links.map((i) => (
                  <li key={i.id}>
                    <Link
                      to={i.href}
                      className="hover:text-secondary transition-all duration-200 ease-linear"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
          {/* Social Media */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3">
            {socialMedia && socialMedia.length > 0
              ? socialMedia.map((i) => (
                  <Link
                    key={i.id}
                    to={i.href}
                    className="hover:text-secondary transition-all duration-200 ease-linear"
                  >
                    {i.icon}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
      {/* Mobile Footer */}
      <div className="block lg:hidden pb-10">
        <div className="mb-8">
          <Accordion title={quickAccess.title}>
            <ul className="grid gap-4 font-light">
              {quickAccess && quickAccess.links.length > 0
                ? quickAccess.links.map((i) => (
                    <li key={i.id}>
                      <Link
                        to={i.href}
                        className="hover:text-secondary transition-all duration-200 ease-linear hover:ms-4.5 ms-4"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </Accordion>
          <Accordion title={legalServices.title}>
            <ul className="grid gap-4 font-light">
              {legalServices && legalServices.links.length > 0
                ? legalServices.links.map((i) => (
                    <li key={i.id}>
                      <Link
                        to={i.href}
                        className="hover:text-secondary transition-all duration-200 ease-linear hover:ms-4.5 ms-4"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </Accordion>
          <Accordion title={servicesData.title}>
            <ul className="grid gap-4 font-light">
              {servicesData && servicesData.links.length > 0
                ? servicesData.links.map((i) => (
                    <li key={i.id}>
                      <Link
                        to={i.href}
                        className="hover:text-secondary transition-all duration-200 ease-linear hover:ms-4.5 ms-4"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </Accordion>
          <Accordion title={cooperationData.title}>
            <ul className="grid gap-4 font-light">
              {cooperationData && cooperationData.links.length > 0
                ? cooperationData.links.map((i) => (
                    <li key={i.id}>
                      <Link
                        to={i.href}
                        className="hover:text-secondary transition-all duration-200 ease-linear hover:ms-4.5 ms-4"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </Accordion>
        </div>
        <div className="">
          <LogoSVG className="mb-8" />
          <p className="font-normal">
            ارائه‌دهنده خدمات حقوقی تخصصی، تنظیم اسناد و مشاوره توسط وکلای پایه
            یک دادگستری
          </p>
          <div className="py-12 flex items-center justify-end gap-3">
            {socialMedia && socialMedia.length > 0
              ? socialMedia.map((i) => (
                  <Link
                    key={i.id}
                    to={i.href}
                    className="hover:text-secondary transition-all duration-200 ease-linear"
                  >
                    {i.icon}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
