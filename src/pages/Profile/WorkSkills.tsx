import { Form, Formik, FieldArray } from "formik";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";
import MainAreasCard from "../../components/cards/MainAreasCard";
import { subCategory, mainCategories } from "../../utils/Abilities";
import { useState } from "react";
import ButtonFormik from "../../components/inputs/ButtonFormik";
import FormikInput from "../../components/inputs/FormikInput";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSmall } from "react-icons/hi2";

interface FormValues {
  languages: {
    language: string;
    level: string;
  }[];
}
export default function WorkSkills() {
  const [mainCategoriesList, setMainCategoriesList] = useState(mainCategories);
  const [subCategoryList, setSubCategoryList] = useState(subCategory);

  const [check, setCheck] = useState<boolean | null>(null);

  const checkHandler = (event: any) => {
    setCheck(event.target.checked);
  };

  return (
    <div className="w-full">
      <Formik
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
        initialValues={{
          languages: [{ language: "", level: "" }],
        }}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-center gap-5">
              <div className="w-full flex justify-start lg:pr-7 lg:pl-7">
                <span className="inline-flex bg-[#EAF4FF] items-center gap-2 p-2.5 rounded-2xl">
                  <HiOutlineShieldExclamation className="text-[#1976D2] w-6 h-6" />
                  <p className="text-[#1976D2] text-[10px] lg:text-sm">
                    تنها امکان انتخاب ۶ حوزه کاری اصلی و ۶ حوزه کاری فرعی برای
                    هر یک از وکلای محترم وجود دارد.
                  </p>
                </span>
              </div>
              <div className="w-full flex justify-center lg:justify-start lg:pr-7 lg:pl-7">
                <span className="inline-flex bg-[#C8A45A1A] items-start gap-2 p-2.5 rounded-2xl">
                  <CgDanger className="text-[#F1B24A] w-6 h-6 min-w-6" />
                  <p className="text-[#F1B24A] text-[10px] lg:text-sm">
                    توجه داشته باشید که با تغییر حوزه‌های کاری، پیشنهادهای قبلی
                    ارائه خدمات شما (در صورت وجود) در موضوعاتی که از فهرست
                    مهارت‌ها حذف می‌شوند، از حالت نمایش عمومی خارج خواهند شد.
                    همچنین پیشنهادهای قبلی شما در موضوعات جدید (در صورت وجود)
                    به‌صورت عمومی نمایش داده خواهند شد.
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-4 lg:pr-7 lg:pl-7">
                <div className="font-normal text-sm">حوزه‌های کاری اصلی</div>
                <div className="flex flex-col gap-9  lg:grid lg:grid-cols-2 lg:gap-y-9 lg:gap-x-4">
                  {mainCategoriesList.map((cat) => (
                    <MainAreasCard
                      key={cat.id}
                      topAccardeon="flex-wrap gap-2 h-0 hidden flex lg:flex lg:h-auto"
                      bottomAccardeon="flex-wrap gap-2 h-auto flex lg:flex lg:h-auto"
                      {...cat}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:pr-7 lg:pl-7">
                <div className="font-normal text-sm">
                  حوزه‌های کاری فرعی(حداکثر 4 مورد)
                </div>
                <div className="w-full flex flex-col gap-9 lg:grid lg:grid-cols-2 lg:gap-y-9 lg:gap-x-4">
                  {subCategoryList.map((cat) => (
                    <MainAreasCard
                      key={cat.id}
                      topAccardeon="flex-wrap gap-2 h-0 hidden"
                      bottomAccardeon="flex-wrap gap-2 h-auto flex"
                      {...cat}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:pr-7 lg:pl-7 ">
                <div className="w-full flex items-center gap-1.5 justify-start">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={checkHandler}
                  />
                  <p>
                    اینجانب تأیید می‌نمایم که در حوزه‌های کاری انتخاب‌شده دارای
                    تخصص بوده و در صورت ارجاع موکل در این زمینه‌ها، مسئولیت
                    پاسخگویی را بر عهده خواهم داشت.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <div className="w-full lg:w-[70%]">
                    <ButtonFormik active={!check} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:pr-7 lg:pl-7 ">
                <span>زبان های خارجی</span>
                <FieldArray name="languages">
                  {({ push, remove }) => (
                    <>
                      {values.languages.map((item, index) => (
                        <div key={index} className="flex gap-8 justify-between ">
                          <FormikInput
                            label="زبان"
                            name={`languages.${index}.language`}
                            as="select"
                            textRight
                            select={[
                              { id: 1, title: "انگلیسی" },
                              { id: 2, title: "ترکی" },
                              { id: 3, title: "فرانسوی" },
                              { id: 4, title: "ایتالیایی" },
                            ]}
                          />
                          <FormikInput
                            label="سطح تسلط"
                            name={`languages.${index}.level`}
                            as="select"
                            textRight
                            select={[
                              { id: 1, title: "عالی" },
                              { id: 2, title: "خوب" },
                              { id: 3, title: "متوسط" },
                            ]}
                          />
                          <div className="flex items-end ">
                            <button className="w-11.5 h-11.5 flex items-center justify-center">
                              <HiOutlineMinusSmall
                                className="bg-[#9DC88D] w-5 h-5  rounded-2xl flex items-center justify-center"
                                onClick={() => remove(index)}
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center justify-start">
                        <button
                          onClick={() => push({ language: "", level: "" })}
                          className="bg-[#9DC88D] w-11.5 h-11.5 rounded-2xl flex items-center justify-center"
                        >
                          <HiOutlinePlusSm className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  )}
                </FieldArray>

                <div className="w-full flex justify-end">
                  <div className="w-full lg:w-[70%]">
                    <ButtonFormik />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
