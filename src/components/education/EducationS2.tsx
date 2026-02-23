import { Formik, Form, type FormikErrors } from "formik";
import { type EducationValue } from "../../types/formValues/FormValues";
import FormikInput from "../inputs/FormikInput";
import { HiOutlinePaperClip } from "../../assets/icons/icons";
import ButtonFormik from "../inputs/ButtonFormik";

const initialValues: EducationValue = {
  University: "",
  Educationalevel: "",
  EducationField: "",
  AcademicYear: "",
  LastAcademicYear: "",
  isStudying: false,
  isLastDegree: false,
  isPublic: false,
  profileImage: null,
};

interface EducationS2Props {
  changeStep: (values: EducationValue) => void;
  cancelButton: ()=>void
}

export default function EducationS2({ changeStep, cancelButton }: EducationS2Props) {
  return (
    <div className="w-full">
      <Formik<EducationValue>
        initialValues={initialValues}
        onSubmit={(values: EducationValue) => {
          changeStep(values);
        }}
        validate={(values: EducationValue) => {
          const errors: FormikErrors<EducationValue> = {};
          if(!values.University){
            errors.University = "نام دانشگاه الزامی است"
          }

          if(!values.Educationalevel){
            errors.Educationalevel= "فیلد مقطع تحصیلی الزامی است"
          }

          if(!values.EducationField){
            errors.EducationField = "فیلد رشته تحصیلی الزامی است"
          }
          if(!values.AcademicYear){
            errors.AcademicYear = "فیلد سال تحصیلی الزامی است"
          }
          if(!values.LastAcademicYear){
            errors.LastAcademicYear = "فیلد سال تحصیلی الزامی است"
          }

          return errors
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-6 items-center lg:pr-7 lg:pl-7">
              <div className="w-full flex">
                <FormikInput
                  label="نام دانشکاه"
                  name="University"
                  type="text"
                  required
                  textRight
                  placeholder="نام دانشگاه خود را وارد کنید"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-between gap-6 lg:flex-row">
                <FormikInput
                  label="مقطع تحصیلی"
                  name="Educationalevel"
                  as="select"
                  required
                  textRight
                  select={[
                    { id: 1, title: "مقطع تحصیلی را انتخاب کنید" },
                    { id: 2, title: "لیسانس" },
                    { id: 3, title: "فوق لیسانس" },
                    { id: 4, title: "دکتری" },
                  ]}
                  placeholder="مقطع تحصیلی خود را انتخاب کنید"
                />
                <FormikInput
                  label="رشته تحصیلی"
                  name="EducationField"
                  as="select"
                  required
                  textRight
                  select={[
                    { id: 1, title: " رشته تحصیلی را انتخاب کنید" },
                    { id: 2, title: "حقوق جزا" },
                    { id: 3, title: "حقوق مدنی" },
                    { id: 4, title: "حقوق بین الملل" },
                  ]}
                />
              </div>
              <div className="w-full flex flex-col items-center justify-between gap-6 lg:flex-row">
                <FormikInput
                  label="سال شروع"
                  name="AcademicYear"
                  type="text"
                  required
                  textRight
                  placeholder="1398"
                />
                <FormikInput
                  label="سال پایان"
                  name="LastAcademicYear"
                  type="text"
                  required
                  textRight
                  placeholder="سال فارغ التحصیلی خود را وارد کنید"
                />
              </div>
              <div className="w-full flex justify-start gap-2">
                <input
                  type="checkbox"
                  name="isStudying"
                  checked={values.isStudying}
                  onChange={(e) =>
                    setFieldValue("isStudying", e.target.checked)
                  }
                />
                <label htmlFor="">درحال تحصیل</label>
              </div>

              <div className="w-full flex flex-col gap-2">
                <span>تصویر مدرک تحصیلی *</span>
                <div className="w-full bg-[#F9F8F5] border border-[#D7DBE3] rounded-lg p-3 flex justify-between">
                  <label
                    htmlFor="profileImage"
                    className="font-light text-[#6D7278]"
                  >
                    تصویر مدرک تحصیلی خود را بارگذاری کنید
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/png , image/jpeg"
                    hidden
                    name="profileImage"
                    onChange={(e) => {
                      if (e.currentTarget.files) {
                        setFieldValue("profileImage", e.currentTarget.files[0]);
                      }
                    }}
                  />
                  <label
                    htmlFor="profileImage"
                    className="flex justify-center items-center gap-2 text-accent-blue"
                  >
                    <span className="hidden lg:flex">انتخاب فایل</span>
                    <HiOutlinePaperClip className="w-6 h-6" />
                  </label>
                </div>
                <span className="font-light text-[#6D7278] text-xs">
                  تصویر مدرک تحصیلی صرفاً جهت تأیید اطلاعات بوده و محرمانه تلقی
                  می‌شود.
                </span>
              </div>
              <div className="w-full flex flex-col justify-start gap-2">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="isLastDegree"
                    checked={values.isLastDegree}
                    onChange={(e) =>
                      setFieldValue("isLastDegree", e.target.checked)
                    }
                  />
                  <label htmlFor="">این آخرین مدرک تحصیلی من است</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    name="isPublic"
                    checked={values.isPublic}
                    onChange={(e) =>
                      setFieldValue("isPublic", e.target.checked)
                    }
                  />
                  <label htmlFor="">نمایش عمومی (بغیر از مدرک تحصیلی)</label>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="w-full lg:w-[70%]">
                  <ButtonFormik cancelButton={cancelButton} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
