import ProfileCard from "../cards/ProfileCard";
import { HiOutlineAcademicCap } from "../../assets/icons/icons";
import { type EducationValue } from "../../types/formValues/FormValues";

interface EducationS1Props {
  addEducation: () => void;
  allEducations: EducationValue[];
  deleteItem: (index: number) => void;
}

const EducationS1: React.FC<EducationS1Props> = ({
  addEducation,
  allEducations,
  deleteItem,
}) => {
  return (
    <div className="w-full lg:px-10 flex flex-col flex-wrap items-center gap-7 lg:flex-row">
      {allEducations?.map((education, index) => (
        <ProfileCard
          {...education}
          deleteItem={() => deleteItem(index)}
          rows={[
            { label: " دانشگاه", value: education.University },
            { label: "مقطع تحصیلی", value: education.Educationalevel },
            { label: "رشته تحصیلی", value: education.EducationField },
            {
              label: "شروع سال تحصیلی",
              value: education.AcademicYear,
            },
            {
              label: " پایان سال تحصیلی ",
              value: education.AcademicYear,
            },
          ]}
          isPublic={education.isPublic}
        />
      ))}
      <button
        onClick={addEducation}
        className="w-full max-w-123 text-[#6D7278] gap-6 h-68 border border-dashed border-[#8C91A0] bg-[#F9F8F5] rounded-2xl py-6.25 px-6.25 flex flex-col items-center justify-center "
      >
        <HiOutlineAcademicCap className="w-13 h-13" />
        افزودن سابقه تحصیلی
      </button>
    </div>
  );
};
export default EducationS1;
