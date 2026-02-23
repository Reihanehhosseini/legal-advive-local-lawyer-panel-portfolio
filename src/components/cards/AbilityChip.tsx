
interface AbilityChipProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const AbilityChip: React.FC<AbilityChipProps> = ({
  label,
  checked,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 text-xs py-1 text-[#6D7278] border rounded-full transition
        ${checked ? "bg-[#9DC88D]" : "bg-inherit"}
      `}
    >
      {label}
    </button>
  );
};

export default AbilityChip;