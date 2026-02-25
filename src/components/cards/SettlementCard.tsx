
import { type IconType } from "react-icons";

interface settlementCardProps {
  icon: IconType;
  title: string;
  count:string;
  bg:string
}
export default function SettlementCard({bg , count ,title, icon: Icon }: settlementCardProps) {
  return (
    <div
      className={`w-84 bg-${bg} rounded-2xl border border-[#D7DBE3] h-35.5 p-6 flex flex-col gap-2 justify-center items-start`}
    >
      <div className="w-full">
        <Icon className="w-7.5 h-6" />
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="text-sm">{title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-2xl text-[#6D7278]">{count}</span>
          <span className="text-base">تومان</span>
        </div>
      </div>
    </div>
  );
}
