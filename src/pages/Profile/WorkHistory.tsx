import { useState } from "react";
import { HiOutlineShieldExclamation } from "../../assets/icons/icons";
import WorkHistoryS1 from "../../components/workhistory/WorkHistoryS1";
import WorkHistoryS2 from "../../components/workhistory/WorkHistoryS2";
import { type workHistoryValue } from "../../types/formValues/FormValues";

export default function WorkHistory() {
  const [step, setStep] = useState<"step_1" | "step_2">("step_1");
  const [allWorkHistory, setAllWorkHistory] = useState<workHistoryValue[]>([]);

  const changeStep = (values: workHistoryValue) => {
    setStep("step_1");
    setAllWorkHistory(prev => ([...prev , values]))
  };

  const addWorkHistory = ()=>{
    setStep("step_2")
  }
    const deleteItem = (index: number) => {
      setAllWorkHistory((prev) => prev.filter((_, i) => i !== index));
    };
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center gap-5">
        <div className="w-full flex justify-start lg:px-7">
          {step === "step_1" && (
            <span className="inline-flex bg-[#EAF4FF] items-center gap-2 p-2.5 rounded-2xl">
              <HiOutlineShieldExclamation className="text-[#1976D2] w-6 h-6" />
              <p className="text-[#1976D2] text-[10px] lg:text-sm">
                لطفاً یکی از سوابق کاری خود را ویرایش کرده و آن را به‌عنوان
                آخرین سابقه کاری ثبت نمایید.
              </p>
            </span>
          )}
        </div>
        {step === "step_1" && (
          <WorkHistoryS1
            addWorkHistory={addWorkHistory}
            allWorkHistories={allWorkHistory}
            deleteItem={deleteItem}
          />
        )}
        {step === "step_2" && <WorkHistoryS2 changeStep={changeStep} />}
      </div>
    </div>
  );
}
