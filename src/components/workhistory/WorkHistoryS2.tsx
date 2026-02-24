import { type workHistoryValue } from "../../types/formValues/FormValues";
import { Formik, Form, type FormikErrors } from "formik";
import FormikInput from "../inputs/FormikInput";
import ButtonFormik from "../inputs/ButtonFormik";
import type React from "react";

const initialValues: workHistoryValue = {
  job:"",
  institution: "",
  jobPosition: "",
  jobYear: "",
  lastJobYear: "",
  isbusy: false,
  isPublic: false,

};

interface WorkHistoryS2Props {
  changeStep: (values: workHistoryValue) => void;
}
const WorkHistoryS2: React.FC<WorkHistoryS2Props> = ({ changeStep }) => {
  return (
    <div className="w-full">
      <Formik<workHistoryValue>
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          changeStep(values);
        }}
        validate={(values) => {
          const errors: FormikErrors<workHistoryValue> = {};
          if (!values.institution) {
            errors.institution = "فیلد موسسه الزامی است";
          }
          if (!values.jobPosition) {
            errors.jobPosition = "فیلد سمت الزامی است";
          }
          if (!values.jobYear) {
            errors.jobYear = "فیلد سال شروع الزامی است";
          }
          if (!values.lastJobYear) {
            errors.lastJobYear = "فیلد سال پایان الزامی است";
          }
          return errors;
        }}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-6 items-center lg:pr-7 lg:pl-7">
              <div className="w-full">
                <FormikInput
                  label="نام موسسه"
                  name="institution"
                  required
                  textRight
                  type="text"
                  placeholder="نام موسسه را وارد کنید"
                />
              </div>
              <div className="w-full">
                <FormikInput
                  label="سمت"
                  name="jobPosition"
                  required
                  textRight
                  type="text"
                  placeholder="سمت خود را وارد کنید"
                />
              </div>
              <div className="w-full flex flex-col justify-between gap-6 lg:flex-row">
                <FormikInput
                  label="سال شروع"
                  name="jobYear"
                  type="text"
                  required
                  textRight
                />
                <FormikInput
                  label="سال پایان"
                  name="lastJobYear"
                  type="text"
                  required
                  textRight
                />
              </div>
              <div className="w-full flex justify-start items-center gap-2">
                <input type="checkbox" name="isbusy" />
                <label>مشغول به کار</label>
              </div>
              <div className="w-full flex justify-start items-center gap-2">
                <input type="checkbox" name="isPublic" />
                <label>نمایش عمومی (بغیر از مدرک تحصیلی)</label>
              </div>
              <div className="w-full flex justify-end">
                <div className="w-full lg:w-[70%]">
                  <ButtonFormik />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default WorkHistoryS2;
