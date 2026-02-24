import { HiOutlineShieldExclamation } from "../../assets/icons/icons";
import { useState } from "react";
import EducationS1 from "../../components/education/EducationS1";
import EducationS2 from "../../components/education/EducationS2";
import { type EducationValue } from "../../types/formValues/FormValues";

export default function EducationalBackground() {
  const [step, setStep] = useState<"step_1" | "step_2">("step_1");
  const [allEducation, setAllEducation] = useState<EducationValue[]>([]);

  const addEducation = () => {
    setStep("step_2");
  };

  const cancelButton = () => {
    setStep("step_1");
  };

  const changeStep = (value: EducationValue) => {
    setStep("step_1");
    setAllEducation((prev) => [...prev, value]);
  };

  const deleteItem = (index: number) => {
    setAllEducation((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center gap-5">
        <div className="w-full flex justify-start lg:px-7">
          <span className="inline-flex bg-[#EAF4FF] items-center gap-2 p-2.5 rounded-2xl">
            <HiOutlineShieldExclamation className="text-[#1976D2] w-6 h-6" />
            <p className="text-[#1976D2] text-[10px] lg:text-sm">
              {step === "step_1" && (
                <>
                  لطفاً یکی از سوابق تحصیلی خود را ویرایش کرده و آن را به‌عنوان
                  آخرین سابقه تحصیلی ثبت نمایید، یا در صورت لزوم آخرین مدرک
                  تحصیلی خود را ایجاد کنید.
                </>
              )}
              {step === "step_2" && (
                <>
                  چنانچه این سابقه تحصیلی آخرین مدرک تحصیلی شما می‌باشد، حتماً
                  گزینه مربوط به «این آخرین مدرک تحصیلی من است» را انتخاب
                  نمایید.
                </>
              )}
            </p>
          </span>
        </div>
        {step === "step_1" && (
          <EducationS1
            addEducation={addEducation}
            allEducations={allEducation}
            deleteItem={deleteItem}
          />
        )}
        {step === "step_2" && (
          <EducationS2 changeStep={changeStep} cancelButton={cancelButton} />
        )}
      </div>
    </div>
  );
}
