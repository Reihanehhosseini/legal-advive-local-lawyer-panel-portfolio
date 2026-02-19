import { HiOutlinePlusCircle } from 'react-icons/hi';
import { BackgroundShape } from '../../assets/images/svg';

export default function walletPage() {
  return (
    <div className="grid gap-y-6 ms-0 lg:ms-8">
      <p className="text-base text-global-7">امور مالی</p>
      <button
        type="button"
        className="flex items-center px-3 py-2 bg-primary text-white rounded-full w-fit"
      >
        <HiOutlinePlusCircle size={20} />
        <span>افزایش موجودی</span>
      </button>
      <div className="grid grid-cols-3 gap-x-6">
        <div className="col-span-3 lg:col-span-1 h-44 flex flex-col justify-center items-stretch relative rounded-2xl border border-global-3">
          <img
            src={BackgroundShape}
            alt="بک"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-cover opacity-20"
          />
          <div className="grid grid-cols-2 relative z-2 text-center content-center h-12">
            <p>افزایش موجودی</p>
            <p>
              0 <span>تومان</span>
            </p>
          </div>
          <div className="grid grid-cols-2 relative z-2 text-center content-center h-12">
            <p>مبلغ قابل برداشت</p>
            <p>
              0 <span>تومان</span>
            </p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 h-44 flex flex-col justify-center items-stretch relative rounded-2xl border gap-y-3 border-global-3 bg-global-5 px-6">
          <div className="flex justify-between">
            <p>بانک ملی ایران</p>
            <p>میلاد امینی</p>
          </div>
          <div className="flex justify-between">
            <p>شماره کارت</p>
            <p>************1234</p>
          </div>
          <div className="flex justify-between">
            <p>شماره شبا</p>
            <p>****************</p>
          </div>
        </div>
        <button
          type="button"
          className="col-span-3 lg:col-span-1 h-44 relative rounded-2xl border-2 border-dashed border-global-3 flex items-center justify-center text-text-secondary"
        >
          افزودن حساب بانکی
        </button>
      </div>
    </div>
  );
}
