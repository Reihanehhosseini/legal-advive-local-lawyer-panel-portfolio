import { Formik, Form, FieldArray } from "formik";
import { type languageValue } from "../../types/formValues/FormValues";
import ButtonFormik from "../inputs/ButtonFormik";
import FormikInput from "../inputs/FormikInput";
import { HiOutlineMinusSmall, HiOutlinePlusSm } from "../../assets/icons/icons";

const initialValues: languageValue = {
  languages: [{ language: "", level: "" }],
};
export default function LanguageskillAbility() {
  return (
    <Formik<languageValue>
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={initialValues}
    >
      {({ values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
                        <button
                          type="button"
                          className="w-11.5 h-11.5 flex items-center justify-center"
                        >
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
                      type="button"
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
        </Form>
      )}
    </Formik>
  );
}
