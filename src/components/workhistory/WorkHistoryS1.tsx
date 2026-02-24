import { MdOutlineBusinessCenter } from "../../assets/icons/icons";
import  {type workHistoryValue } from "../../types/formValues/FormValues";
import ProfileCard from "../cards/ProfileCard";

interface WorkHistoryS1Props {
  addWorkHistory: () => void;
  allWorkHistories: workHistoryValue[];
  deleteItem: (index: number) => void;
}
export default function WorkHistoryS1({
  addWorkHistory,
  allWorkHistories,
  deleteItem
}: WorkHistoryS1Props) {
  return (
    <div className="w-full lg:px-10 flex flex-col flex-wrap items-center gap-7 lg:flex-row">
      {/* {allWorkHistories?.map((item, index) => (
        <ProfileCard
          {...item}
          deleteItem={() => deleteItem(index)}
          title="نام موسسه"
          secondRow="سمت"
          thirdRow="سابقه"
          forthRow="سابقه"
        />
      ))} */}
      <button
        onClick={addWorkHistory}
        className="w-full max-w-123 text-[#6D7278] gap-6 h-68 border border-dashed border-[#8<C91A0] bg-[#F9F8F5] rounded-2xl py-6.25 px-6.25 flex flex-col items-center justify-center "
      >
        <MdOutlineBusinessCenter className="w-13 h-13" />
        افزودن سابقه کاری
      </button>
    </div>
  );
}
