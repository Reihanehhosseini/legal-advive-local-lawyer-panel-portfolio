import EducationCard from "../cards/EducationCard";
import { HiOutlineAcademicCap } from "../../assets/icons/icons";


interface EducationS1Props {
  addEducation: () => void;
}
const EducationS1:React.FC<EducationS1Props> = ({ addEducation})=> {
  return (
    <div className="w-full lg:px-10 flex flex-col flex-wrap items-center gap-7 lg:flex-row">
      <EducationCard />
      <button
        onClick={addEducation}
        className="w-123.75 text-[#6D7278] gap-6 h-68 border border-dashed border-[#8C91A0] bg-[#F9F8F5] rounded-2xl py-6.25 px-6.25 flex flex-col items-center justify-center "
      >
        <HiOutlineAcademicCap className="w-13 h-13" />
        افزودن سابقه تحصیلی
      </button>
    </div>
  );
}
export default EducationS1