import AbilityChip from "./AbilityChip";
import {
  HiOutlineChevronUp,
  HiOutlineChevronDown,
} from "../../assets/icons/icons";
import { AbilitiesOfLawyer } from "../../utils/Abilities";

interface MainAreasCardProps {
  id: number;
  title: string;
  main: string;
  abilities: string[];
  topAccardeon: string;
  bottomAccardeon: string;
  checked: boolean;
  selectedAbility: string[];
  onToggle: (checked: boolean) => void;
  onToggleAbility: (ability: string) => void;
}

const MainAreasCard: React.FC<MainAreasCardProps> = ({
  title,
  main,
  checked,
  selectedAbility,
  onToggle,
  onToggleAbility,
  topAccardeon,
  bottomAccardeon,
}) => {
  return (
    <div className="flex flex-col gap-3 p-5 border-2 border-[#D7DBE3] rounded-2xl bg-[#F9F8F5]">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onToggle(e.target.checked)}
          />

          <h1 className="text-[16px] font-normal">{title}</h1>

          <span className="bg-[#BBDDFF] px-3 text-[#00366C] rounded-2xl">
            {main}
          </span>
        </div>

        <div className="flex justify-end lg:hidden">
          {checked ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>
      </div>
      <div className="hidden w-full font-light text-[14px] lg:flex">
        {`خدماتی که در حوزه ${title} ارائه می‌کنید`}
      </div>
      <div className={!checked ? topAccardeon : bottomAccardeon}>
        {AbilitiesOfLawyer.map((ability) => (
          <AbilityChip
            key={ability}
            label={ability}
            checked={selectedAbility.includes(ability)}
            onClick={() => onToggleAbility(ability)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainAreasCard;