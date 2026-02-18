import clsx from "clsx";
import { useEffect, useState } from "react";

interface AbilityChipProps {
  label: string;
  checked: boolean;
  addAbility:(label:string)=>void;
}

const AbilityChip: React.FC<AbilityChipProps> = ({
  label,
  checked,
  addAbility,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (!checked) {
      setSelected(false);
    }
  }, [checked]);
 
  return (
    <button
      disabled={!checked}
      onClick={() => {
        setSelected(!selected);
        addAbility(label);
      }}
      className={clsx(
        "px-3 py-1 rounded-full border border-[#6D7278] text-[#6D7278] text-xs",
        selected ? "bg-[#B5E5A3] border-[#4D774E]" : "bg-inherit",
        !checked && "cursor-none",
      )}
    >
      {label}
    </button>
  );
};
export default AbilityChip;
