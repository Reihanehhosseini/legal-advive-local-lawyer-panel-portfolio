import { Formik, Form, Field, type FormikErrors } from "formik";
import FormikInput from "../../components/inputs/FormikInput";
import ButtonFormik from "../../components/inputs/ButtonFormik";
import { type nationalCodeValues } from "../../types/formValues/FormValues";
import {HiOutlinePaperClip, HiOutlineAcademicCap, HiOutlineCheckCircle} from "../../assets/icons/icons"


const initialValues: nationalCodeValues = {
  nationalCode: "",
  AttorneysLicense: "",
  AttorneysLicenseNumber: "",
  JurisdictionCity: "",
  AddressPage: "",
};
export default function IdentityInformation() {
  return (
    <div className="w-full">
      <Formik<nationalCodeValues>
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<nationalCodeValues> = {};

          if (!values.nationalCode) {
            errors.nationalCode = "کد ملی الزامی است";
          } else if (values.nationalCode.length !== 10) {
            errors.nationalCode = "کد ملی اشتباه است";
          }

          return errors;
        }}
      >
        {({ values, errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-center lg:flex-row ">
              <div className="w-full h-full flex flex-col gap-2 mt-3 mb-7 lg:pr-7 lg:pl-7 lg:w-[30%] lg:mt-0">
                <h1 className="text-sm">کارت و کد ملی</h1>
                <p className="text-[#6D7278] text-xs">
                  این اطلاعات محرمانه بوده و صرفا برای تایید هویت شما استفاده
                  می‌شود.
                </p>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center pb-11 gap-6">
                <FormikInput
                  label="کد ملی"
                  name="nationalCode"
                  type="text"
                  required
                  textRight={false}
                  warning={
                    values.nationalCode &&
                    !errors.nationalCode && (
                      <HiOutlineCheckCircle className="text-[#34C759]" />
                    )
                  }
                />
                <div className="flex flex-col gap-2 w-full">
                  <span>تصویر روی کارت ملی</span>
                  <div className="bg-[#F9F8F5] flex justify-between rounded-lg w-full h-11 border border-[#D7DBE3] p-3">
                    <span className="text-[#6D7278] text-[10px] font-light sm:text-sm">
                      تصویر روی کارت ملی خود را بارگذاری کنید
                    </span>
                    <label
                      htmlFor="nationalCode"
                      className="flex items-center justify-end gap-0.5 cursor-pointer"
                    >
                      <HiOutlinePaperClip className="text-[#2D91F4]" />
                      <span className="text-[#2D91F4] text-xs sm:text-sm">
                        انتخاب فایل
                      </span>
                    </label>
                    <input
                      type="file"
                      accept="image/png , image/jpeg"
                      id="nationalCode"
                      hidden
                    />
                  </div>
                  <span className="text-[#6D7278] text-xs font-light">
                    حداکثر حجم مجاز 500 کیلوبایت است.
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <span>تصویر پشت کارت ملی</span>
                  <div className="bg-[#F9F8F5] flex justify-between rounded-lg w-full h-11 border border-[#D7DBE3] p-3">
                    <span className="text-[#6D7278] text-[10px] font-light sm:text-sm">
                      تصویر پشت کارت ملی خود را بارگذاری کنید
                    </span>
                    <label
                      htmlFor="nationalCode"
                      className="flex items-center justify-end gap-0.5 cursor-pointer"
                    >
                      <HiOutlinePaperClip className="text-[#2D91F4]" />
                      <span className="text-[#2D91F4] text-xs sm:text-sm">
                        انتخاب فایل
                      </span>
                    </label>
                    <input
                      type="file"
                      accept="image/png , image/jpeg"
                      id="nationalCode"
                      hidden
                    />
                  </div>
                  <span className="text-[#6D7278] text-xs font-light">
                    حداکثر حجم مجاز 500 کیلوبایت است.
                  </span>
                </div>
              </div>
            </div>
            <hr className="border-[#D7DBE3]" />
            <div className="w-full flex mt-8 flex-col lg:flex-row">
              <div className="w-full h-full flex flex-col gap-2 mt-3 mb-7 lg:pr-7 pl-7 lg:w-[30%] lg:mt-0">
                <h1 className="text-sm">اطلاعات پروانه وکالت</h1>
                <p className="text-[#6D7278] text-xs">
                  لطفا اطلاعات مقابل را بر اساس پروانه وکالت خود تکمیل نمایید.
                </p>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center gap-6 pb-11">
                <FormikInput
                  label="نوع پروانه"
                  name="AttorneysLicense"
                  as="select"
                  required
                  textRight
                  select={[
                    { id: 1, title: "وکیل پایه یک کانون وکلای دادگستری" },
                    { id: 2, title: "وکیل قوه قضاییه   " },
                  ]}
                />
                <FormikInput
                  label="شماره پروانه وکالت"
                  name="AttorneysLicenseNumber"
                  type="text"
                  textRight={false}
                >
                  <span className="text-[#6D7278] text-sm">
                    تا بیش از تایید مقدار جدید این فیلد ؛ مقدار قبلی آن به عموم
                    نمایش داده می شود.
                  </span>
                </FormikInput>
                <div className="flex flex-col gap-2 w-full">
                  <span>تصویر پروانه وکالت*</span>
                  <div className="bg-[#F9F8F5] flex justify-between rounded-lg w-full h-11 border border-[#D7DBE3] p-3">
                    <label
                      htmlFor="nationalCode"
                      className="flex items-center justify-end gap-0.5 cursor-pointer"
                    >
                      <HiOutlinePaperClip className="text-[#2D91F4]" />
                      <span className="text-[#2D91F4] text-xs sm:text-sm">
                        انتخاب فایل
                      </span>
                    </label>
                    <input
                      type="file"
                      accept="image/png , image/jpeg"
                      id="nationalCode"
                      hidden
                    />
                  </div>
                </div>
                <FormikInput
                  label="استان حوزه قضایی"
                  name="JurisdictionCity"
                  as="select"
                  textRight
                  required
                  select={[
                    { id: 1, title: "تهران" },
                    { id: 2, title: "اصفهان" },
                  ]}
                />
                <FormikInput
                  label="آدرس صفحه ی اختصاصی در وبسایت کانون/مرکز وکل"
                  name="AddressPage"
                  type="text"
                  textRight={false}
                />
              </div>
            </div>
            <hr className="border-[#D7DBE3]" />
            <div className="w-full flex mt-8 flex-col lg:flex-row">
              <div className="w-full h-full flex flex-col gap-2 mt-3 mb-7 lg:pr-7 pl-7 lg:w-[30%] lg:mt-0">
                <h1 className="text-sm">آخرین مدرک تحصیلی</h1>
                <p className="text-[#6D7278] text-xs text-justify">
                  تصویر مدرک تحصیلی شما محرمانه است و تنها به منظور تأیید هویت
                  مورد استفاده قرار می‌گیرد. سایر اطلاعات، در صورت فعال بودن
                  گزینه «نمایش عمومی» و پس از تأیید، به‌صورت عمومی در پروفایل
                  شما نمایش داده خواهند شد.
                </p>
              </div>
              <div className="w-full flex flex-col items-center justify-center pb-11 gap-6">
                <div className="w-full">
                  <label
                    htmlFor="degree"
                    className="w-full h-57.25 rounded-2xl border border-[#8C91A0] border-dashed bg-[#F9F8F5] flex flex-col items-center justify-center"
                  >
                    <HiOutlineAcademicCap className="w-11.5 h-10.5 text-[#6D7278] mb-2" />
                    <span className="text-[#6D7278] text-sm">
                      افزودن آخرین مدرک تحصیلی شما
                    </span>
                  </label>
                  <input type="file" name="" id="degree" accept="" hidden />
                </div>
                <ButtonFormik />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
