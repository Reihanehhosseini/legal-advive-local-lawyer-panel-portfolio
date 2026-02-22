import {  useState } from "react";
import AbilityChip from "./AbilityChip";
import {HiOutlineChevronUp , HiOutlineChevronDown} from "../../assets/icons/icons"
import { AbilitiesOfLawyer } from "../../utils/Abilities";

interface MainAreasCardProps {
  id: number;
  title: string;
  abilities: string[];
  main: string;
  topAccardeon: string;
  bottomAccardeon: string;
}

const MainAreasCard: React.FC<MainAreasCardProps> = ({
  title,
  topAccardeon,
  bottomAccardeon,
  main,
  id,
  abilities,
}) => {
  const [check, setCheck] = useState(false);
  const [allAbility, setAllAbility] = useState<string[]>(abilities);


  const checkHandler = (event: any) => {
    setCheck(event.target.checked);
   
  };

  const addAbility = (label: string) => {
    setAllAbility((prev) => [...prev, label]);
  };


  return (
    <div className="items-center h-fit! flex flex-col gap-3 p-5 border-2 border-[#D7DBE3] rounded-2xl bg-[#F9F8F5]">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex gap-2 items-center justify-start">
          <input type="checkbox" name="" id="" onChange={checkHandler} />
          <h1 className="text-[16px] font-normal">{title}</h1>
          <span className="bg-[#BBDDFF] px-3 text-[#00366C] rounded-2xl">
            {main}
          </span>
        </div>
        <div className="flex justify-end lg:hidden">
          {!check ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        </div>
      </div>
      <div className="hidden w-full font-light text-[14px] lg:flex">{`خدماتی که در حوزه ${title} ارائه میکنید`}</div>
      <div className={!check ? topAccardeon : bottomAccardeon}>
        {AbilitiesOfLawyer.map((title) => (
          <AbilityChip label={title} checked={check} addAbility={addAbility} />
        ))}
      </div>
    </div>
  );
};
export default MainAreasCard;
