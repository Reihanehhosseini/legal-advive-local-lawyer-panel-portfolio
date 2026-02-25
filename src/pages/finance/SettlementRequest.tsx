import SettlementCard from "../../components/cards/SettlementCard";
import {
  HiOutlineCreditCard,
  HiUpload,
  GoAlert,
} from "../../assets/icons/icons";
import { settlement } from "../../utils/Abilities";

export default function SettlementRequest() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex items-center flex-col lg:pr-7.75 gap-6 lg:flex-row lg:justify-start">
        <SettlementCard
          icon={HiOutlineCreditCard}
          title="موجودی"
          count="0"
          bg="[#F6FAF4]"
        />
        <SettlementCard
          icon={HiUpload}
          title="مبلغ قابل برداشت"
          count="0"
          bg="[#FFFFFF]"
        />
      </div>
      <div className="w-full lg:pr-7.75">
        <div className="flex items-center gap-1">
          <GoAlert className="w-5! h-3.5 fill-accent-orange" />
          <span className="font-bold text-xs">نکات مهم </span>
        </div>
        <div className="w-full">
          <ul className="list-disc! pr-2.25 border-r border-accent-orange ">
            {settlement.map((li) => (
              <li key={li.id} className="font-light mt-6 marker:text-accent-orange">
                <p>{li.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
