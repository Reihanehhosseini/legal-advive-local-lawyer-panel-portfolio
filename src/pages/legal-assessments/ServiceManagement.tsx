import { HiOutlineXCircle, HiShieldCheck } from 'react-icons/hi';
import { Toggle } from '../../components';
import { useState } from 'react';

export default function ServiceManagement() {
  const [acticeService, setActiveService] = useState<boolean>(false);

  return (
    <div className="border border-global-3 h-full! rounded-2xl ms-0 lg:ms-12 flex flex-col gap-y-6 px-5.5 py-4">
      <p className="font-bold text-primary">مدیریت خدمت ارزیابی حقوقی</p>
      <div className="flex items-center gap-x-4">
        <Toggle
          checked={acticeService}
          onChange={() => setActiveService((prev) => !prev)}
        />
        <p className="text-global-7">
          برای فعال‌سازی خدمات ارزیابی حقوقی، از دکمه مقابل استفاده کنید.
        </p>
      </div>

      {acticeService ? (
        <div className="flex items-center gap-x-1 text-global-23 bg-global-24 py-2.5 px-3 rounded-full">
          <HiShieldCheck size={24} />
          <p>
            درخواست فعال‌سازی خدمت ارزیابی حقوقی شما با موفقیت انجام شد و
            کاربران می‌توانند درخواست ثبت کنند.
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-x-1 text-global-19 bg-global-16 py-2.5 px-3 rounded-full">
          <HiOutlineXCircle size={24} />
          <p>
            درخواست فعال‌سازی خدمت ارزیابی حقوقی شما تأیید نشد.{' '}
            <span className="font-semibold">توضیحات:</span> این خدمت پیش از
            تائید، توسط کاربر غیرفعال شد.
          </p>
        </div>
      )}
    </div>
  );
}
