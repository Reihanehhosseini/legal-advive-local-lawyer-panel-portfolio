import { type supportValue } from "../../types/formValues/FormValues";
import { Form, Formik } from "formik";
import FormikInput from "../inputs/FormikInput";
import { HiOutlinePaperClip } from "../../assets/icons/icons";
import ButtonFormik from "../inputs/ButtonFormik";

const initialValues: supportValue = {
  unit: "",
  Priority: "",
  RelatedTo: "",
  subject: "",
  messages: "",
  attachment: null,
};

interface SupportS2Props {
  subbmitValue: (value: supportValue) => void;
}

export default function SupportS2({ subbmitValue }:SupportS2Props) {
  return (
    <div className="w-full lg:px-7">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
          subbmitValue(values);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="w-full flex flex-col">
                <FormikInput
                  label="واحد مربوطه"
                  name="unit"
                  textRight
                  required
                  as="select"
                  select={[
                    { id: 1, title: "" },
                    { id: 2, title: "" },
                  ]}
                />
              </div>
              <div className="w-full flex flex-col">
                <FormikInput
                  label="اولویت"
                  name="Priority"
                  textRight
                  required
                  as="select"
                  select={[
                    { id: 1, title: "متوسط" },
                    { id: 2, title: "کم" },
                    { id: 3, title: "زیاد" },
                  ]}
                />
              </div>
              <div className="w-full flex flex-col">
                <FormikInput
                  label="مربوط به"
                  name="RelatedTo"
                  textRight
                  required
                  as="select"
                  select={[
                    { id: 1, title: "هیچ کدام" },
                    { id: 2, title: "همه" },
                  ]}
                />
              </div>
              <div className="w-full flex flex-col">
                <FormikInput
                  label="موضوع"
                  name="subject"
                  textRight
                  required
                  type="text"
                  placeholder="لطفا فارسی بنویسید"
                />
              </div>
              <div className="w-full flex flex-col">
                <FormikInput
                  label="پیام"
                  name="messages"
                  textRight
                  required
                  as="textarea"
                  placeholder="لطفا فارسی بنویسید"
                />
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <label htmlFor="">
                  <span>فایل پیوست</span>
                </label>
                <div className="w-full bg-[#F9F8F5] border border-[#D7DBE3] rounded-lg p-3 flex justify-between">
                  <label
                    htmlFor="profileImage"
                    className="font-light text-[#6D7278]"
                  >
                    فایل مورد نظر خود را بارگذاری کنید
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
              </div>
              <div className="w-full flex justify-end">
                <div className="w-[70%]">
                  <ButtonFormik />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
