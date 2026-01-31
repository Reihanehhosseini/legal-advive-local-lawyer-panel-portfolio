// ======================================================================================================|
// ========================================>Types<=======================================================|

import {
  HiOutlineCalendar,
  HiOutlineChatAlt2,
  HiOutlineQuestionMarkCircle,
  HiQuestionMarkCircle,
  HiUserCircle,
} from 'react-icons/hi';
import {
  Button,
  CommentCard,
  DashboardCard,
  MotionSelect,
  ValueBadgeDisplay,
} from '../components';
import type { DataGridColumn } from '../components/tables/DataTable/DataTable.types';
import ResponsiveDataGrid from '../components/tables/DataTable/ResponsiveDataTable';
import { StatusBadge } from '../components/ui/badges/StatusBadge';
import { ChevronLeft } from 'lucide-react';
import {
  EditPenIcon,
  MailIcon,
  StarIcon,
  TrophyIcon,
} from '../components/ui/icons';
import Toggle from '../components/ui/toggles/Toggle';
import { useState } from 'react';

// ======================================================================================================|
interface DataType {
  title: string;
  description: string;
  price: string;
  status: string;
  financeStatus: string;
  create_date: string;
}

export default function DashboardPage() {
  // ======================================================================================================|
  // ========================================>Static Data<=================================================|
  // ======================================================================================================|

  const data: DataType[] = [
    {
      title: '1234',
      description: 'لورم ایپسوم ماسا مورد استفاده قرار گیرد.',
      price: '800,000',
      status: 'pending',
      financeStatus: 'وضعیت مالی',
      create_date: '2025-01-18',
    },
    {
      title: '1234',
      description: 'لورم ایپسوم ماسا مورد استفاده قرار گیرد.',
      price: '800,000',
      status: 'pending',
      financeStatus: 'وضعیت مالی',
      create_date: '2025-01-18',
    },
  ];

  const dataColumns: DataGridColumn<DataType>[] = [
    {
      key: 'title',
      header: 'شماره',
      colSpan: 2,
    },
    {
      key: 'description',
      header: 'شرح',
      colSpan: 3,
      cellClassName: 'line-clamp-1',
    },
    {
      key: 'price',
      header: 'مبلغ (تومان)',
      colSpan: 2,
    },
    {
      key: 'status',
      header: 'وضعیت سفارش',
      colSpan: 2,
      render: (v) => <StatusBadge status={v} />,
    },
    {
      key: 'financeStatus',
      header: 'وضعیت مالی',
      colSpan: 2,
    },
    {
      key: 'financeStatus',
      header: 'نوع سفارش',
      colSpan: 2,
    },
    {
      key: 'financeStatus',
      header: 'تعداد سفارش',
      colSpan: 2,
    },
    {
      key: 'create_date',
      header: 'تاریخ ثبت',
      colSpan: 2,
      headerClassName: 'text-end',
      cellClassName: 'text-end',
      render: (v) => new Date(v).toLocaleDateString('fa-IR'),
    },
  ];
  // ======================================================================================================|
  // ========================================>States<======================================================|
  // ======================================================================================================|

  const [active, setActive] = useState(false);

  // ======================================================================================================|
  // ========================================>JSX<=========================================================|
  // ======================================================================================================|
  return (
    <div className="px-4 pb-4">
      <p className="text-lg font-bold mb-5">میزکار من</p>
      <div className="border border-global-3 rounded-2xl p-2 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-x-6 w-full">
            <ValueBadgeDisplay label="مجموع درآمد" number={1} unit />
            <ValueBadgeDisplay label="تعداد سفارش" number={1} />
          </div>
          <MotionSelect
            onSelect={(v) => console.log(v)}
            selectedId={1}
            icon={
              <HiOutlineCalendar className="text-text-secondary" size={18} />
            }
            options={[
              { id: 1, key: 'یک', value: 'یک' },
              { id: 2, key: 'دو', value: 'دو' },
            ]}
          />
        </div>
        <ResponsiveDataGrid<DataType> data={data} columns={dataColumns} />
        <div className="flex items-center justify-center gap-x-4 mt-3">
          <button
            type="button"
            className="bg-accent/40 p-1.5 rounded-lg text-white"
          >
            <ChevronLeft size={18} className="rotate-180" />{' '}
          </button>
          <button
            type="button"
            className="bg-global-5 p-1.5 rounded-lg text-white"
          >
            <ChevronLeft size={18} />{' '}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-6 mb-6">
        <div className="col-span-12 lg:col-span-5 border border-global-3 rounded-2xl p-7">
          <p className="text-base mb-3">امتیاز شما در کلینیک حقوقی</p>
          <p className="font-light mb-8">
            امتیاز فعلی شما برای ورود به رتبه‌بندی کافی نیست.
          </p>
          <div className="flex flex-col gap-y-4 justify-center items-center mb-8">
            <TrophyIcon />
            <p className="text-base font-bold ">20 امتیاز</p>
          </div>
          <Button variant="primary">راه کسب امتیاز</Button>
        </div>
        <div className="col-span-12 lg:col-span-7 border border-global-3 rounded-2xl py-2.5 px-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-base ps-4">دیدگاه مشتریان</p>
            <div className="flex items-center gap-x-1">
              <p className="text-primary">
                طبق <span>1024</span> دیدگاه
              </p>
              <div className="flex items-center text-secondary text-base font-bold">
                <StarIcon width={22} className="mb-1" />
                <span>4.9</span>
              </div>
            </div>
          </div>
          {/* Comments */}
          <CommentCard
            commentText="با سلام و احترام. بنده پارسال در تلگرام به دو نفر که هیچ خصومتی نداشتیم،         مرتکب یک اشتباه شدم. آن اشتباه این بود که در تلگرام به ایشان توهین کرده و افترا زده و هم تهدید کردم."
            userIcon={<HiUserCircle size={48} />}
            userName="علی رضایی"
            commentDate="فروردی 11و 1404 در 12:23 ب/ظ"
            ratingValue={4}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 mb-6">
        <DashboardCard
          className="col-span-1 flex flex-col items-center justify-center w-full text-text-secondary bg-global-12 border border-global-3 rounded-2xl px-6 py-8"
          icon={<MailIcon className="mb-6" />}
          text="در حال حاضر هیچ درخواست پشتیبانی در انتظار بررسی برای شما ثبت نشده است."
          buttonText="ثبت درخواست پشتیبانی"
        />
        <DashboardCard
          className="col-span-1 flex flex-col items-center justify-center w-full text-text-secondary bg-global-12 border border-global-3 rounded-2xl px-6 py-8"
          icon={<EditPenIcon className="mb-6" />}
          text="در حال حاضر هیچ وظیفه‌ای برای شما ثبت نشده است."
          buttonText="ارسال مقاله"
        />
        <div className="col-span-1 pb-16 relative text-center flex flex-col items-center justify-center w-full text-text-secondary bg-global-12 border border-global-3 rounded-2xl px-6 py-8">
          <p className="mb-2 text-primary text-base font-bold">
            وضعیت مالی شما در بنیاد وکلا
          </p>
          <p className="text-start text-global-7 font-light mb-8">
            جایگاه مالی شما در شبکه بنیاد وکلا بر اساس میزان درآمد ثبت‌شده شما
            در ۱۴ روز گذشته و در مقایسه با بالاترین درآمد متخصصان این شبکه مشخص
            می‌شود.
          </p>
          <div className="w-[80%] h-22.5 rounded-2xl bg-white flex flex-col justify-center items-center gap-y-1 mb-5">
            <img src="/gifs/alert_gif.gif" alt="تصویر" className="w-11 h-11" />
            <p className="text-red-600">شما درآمدی نداشته‌اید</p>
          </div>
          <button className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[90%] bg-white py-1.5 rounded-full text-black flex items-center justify-center gap-x-2">
            <HiQuestionMarkCircle className="text-primary" size={24} />
            راه‌های ارتقای جایگاه من چیست؟
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-6">
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 border border-global-3 rounded-2xl py-2.5 px-3">
          <div className="flex items-center justify-between gap-x-2 mb-5">
            <div className="min-w-11 h-11 bg-global-21 rounded-2xl flex items-center justify-center">
              <HiOutlineChatAlt2
                className="m-auto text-accent-indigo"
                size={20}
              />
            </div>
            <p>مشاوره حقوقی آنلاین</p>
            <span className="text-text-secondary bg-global-11 text-xs font-bold px-2 py-1 rounded-full">
              غیرفعال
            </span>
          </div>

          <div className="px-2 flex flex-col gap-y-3 border-b border-global-3 pb-3 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary">قیمت</span>
              <p className="text-base text-black font-bold">
                24,000{' '}
                <span className="text-[10px] text-text-secondary">تومان</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary">کارمزد</span>
              <p className="text-base text-black font-bold">60%</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-3 mb-3">
            <div className="flex items-center justify-between">
              <p>مشاوره پیش از خرید</p>
              <Toggle
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>فعال کردن</p>
              <Toggle
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <button className="bg-global-5 text-text-secondary rounded-full py-1.5 px-4 mx-auto">
              مدیریت پیشنهادها
            </button>
            <button className="flex items-center text-accent-blue gap-x-0.5">
              <HiOutlineQuestionMarkCircle size={20} />
              <span className="text-xs">راهنما</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
