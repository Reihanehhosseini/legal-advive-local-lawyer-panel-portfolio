import { HiOutlineShieldExclamation, CgDanger } from "../../assets/icons/icons";
import LanguageskillAbility from "../../components/workskills/LanguageskillAbility";
import MainAreaOfWork from "../../components/workskills/WorkskillAbility";


export default function WorkSkills() {
  return (
    <div className="w-full flex flex-col justify-center gap-5">
      <div className="w-full flex justify-start lg:pr-7 lg:pl-7">
        <span className="inline-flex bg-[#EAF4FF] items-center gap-2 p-2.5 rounded-2xl">
          <HiOutlineShieldExclamation className="text-[#1976D2] w-6 h-6" />
          <p className="text-[#1976D2] text-[10px] lg:text-sm">
            تنها امکان انتخاب ۶ حوزه کاری اصلی و ۶ حوزه کاری فرعی برای هر یک از
            وکلای محترم وجود دارد.
          </p>
        </span>
      </div>
      <div className="w-full flex justify-center lg:justify-start lg:pr-7 lg:pl-7">
        <span className="inline-flex bg-[#C8A45A1A] items-start gap-2 p-2.5 rounded-2xl">
          <CgDanger className="text-[#F1B24A] w-6 h-6 min-w-6" />
          <p className="text-[#F1B24A] text-[10px] lg:text-sm">
            توجه داشته باشید که با تغییر حوزه‌های کاری، پیشنهادهای قبلی ارائه
            خدمات شما (در صورت وجود) در موضوعاتی که از فهرست مهارت‌ها حذف
            می‌شوند، از حالت نمایش عمومی خارج خواهند شد. همچنین پیشنهادهای قبلی
            شما در موضوعات جدید (در صورت وجود) به‌صورت عمومی نمایش داده خواهند
            شد.
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-4 lg:pr-7 lg:pl-7">
        <MainAreaOfWork />
      </div>
      <div className="flex flex-col gap-4 lg:pr-7 lg:pl-7">
        <LanguageskillAbility/>
      </div>
    </div>
  );
}
