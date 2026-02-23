import {
  HiOutlineCheck,
  HiOutlineTrash,
  HiOutlinePencilSquare,
} from "../../assets/icons/icons";
import { type EducationValue } from "../../types/formValues/FormValues";

interface EducationCardProps extends EducationValue {
  deleteItem: () => void;
}
const EducationCard = (props: EducationCardProps) => {
  return (
    <div className="w-123.75 gap-6 h-68 border border-[#D7DBE3] rounded-2xl py-6.25 px-6.25 flex flex-col items-center ">
      <div className="w-full flex items-center justify-between ">
        <span className="text-xs font-bold">دانشگاه {props.University}</span>
        <span className="text-xs bg-[#FFECCC] px-2.5 rounded-2xl text-[#F1B24A] font-bold">
          در انتظار بررسی
        </span>
      </div>
      <div className="w-full flex items-center justify-between ">
        <span className="text-xs font-normal text-[#6D7278]">نمایش عمومی</span>
        <span className="text-xs bg-[#D0EEC5] px-2.5 rounded-2xl text-[#4D774E] font-bold flex items-center">
          <HiOutlineCheck />
          بله
        </span>
      </div>
      <div className="w-full flex items-center justify-between ">
        <span className="text-xs font-normal text-[#6D7278]">مقطع تحصیلی</span>
        <span className="text-xs rounded-2xl font-normal flex items-center">
          {props.Educationalevel}
        </span>
      </div>
      <div className="w-full flex items-center justify-between ">
        <span className="text-xs font-normal text-[#6D7278]">رشته تحصیلی</span>
        <span className="text-xs font-normal ">{props.EducationField}</span>
      </div>
      <div className="w-full flex items-center justify-between ">
        <span className="text-xs font-normal text-[#6D7278]">سال تحصیلی</span>
        <span className="text-xs font-normal ">
          {props.AcademicYear}-{props.LastAcademicYear}
        </span>
      </div>
      <div className="w-full flex items-center justify-end gap-5">
        <button
          onClick={props.deleteItem}
          className="flex items-center justify-between gap-1 rounded-2xl px-3.5 py-1 bg-[#FFECEC] text-xs text-[#D32F2F]"
        >
          <HiOutlineTrash className="w-5 h-5" />
          حذف
        </button>
        <button className="flex items-center justify-between gap-1 rounded-2xl px-3.5 py-1 bg-[#F9F8F5] text-xs">
          <HiOutlinePencilSquare className="w-5 h-5" />
          ویرایش
        </button>
      </div>
    </div>
  );
};
export default EducationCard;
