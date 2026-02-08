import { Formik, Form, Field, type FormikErrors, ErrorMessage } from "formik";
import { HiOutlinePaperClip } from "react-icons/hi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi";

interface FormValues {
  nationalCode: string;
  AttorneysLicense: string;
  AttorneysLicenseNumber: string;
  JurisdictionCity: string;
  AddressPage: string;
}

export default function IdentityInformation() {
  return (
    <div className="w-full">
      <Formik
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
        initialValues={{
          nationalCode: "",
          AttorneysLicense: "",
          AttorneysLicenseNumber: "",
          JurisdictionCity: "",
          AddressPage: "",
        }}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};

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
              <div className="w-full h-full flex flex-col gap-2 mt-3 mb-7 lg:pr-7 pl-7 lg:w-[30%] lg:mt-0">
                <h1 className="text-sm">کارت و کد ملی</h1>
                <p className="text-[#6D7278] text-xs">
                  این اطلاعات محرمانه بوده و صرفا برای تایید هویت شما استفاده
                  می‌شود.
                </p>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center pb-11 gap-6">
                <div className="flex flex-col gap-1.5 w-full ">
                  <span>کد ملی</span>
                  <div className="bg-[#F9F8F5] flex gap-1 rounded-lg items-center w-full h-11 border border-[#D7DBE3] p-3 text-left">
                    <Field
                      type="text"
                      name="nationalCode"
                      className="w-full text-left outline-none"
                    />
                    {values.nationalCode && !errors.nationalCode && (
                      <HiOutlineCheckCircle className="text-[#34C759]" />
                    )}
                  </div>

                  <ErrorMessage
                    name="nationalCode"
                    component="span"
                    className="text-red-700"
                  />
                </div>
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
                <div className="flex flex-col gap-1.5 w-full">
                  <span>نوع پروانه *</span>
                  <Field
                    as="select"
                    name="AttorneysLicense"
                    className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 text-[#6D7278]"
                  >
                    <option value="وکیل پایه یک کانون وکلای دادگستری">
                      وکیل پایه یک کانون وکلای دادگستری
                    </option>
                    <option value="وکیل قوه قضاییه">وکیل قوه قضاییه</option>
                  </Field>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <span>شماره پروانه وکالت</span>
                  <Field
                    placeholder="0000"
                    type="text"
                    name="AttorneysLicenseNumber"
                    className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 "
                  />
                  <span className="text-[#6D7278] text-sm">
                    تا بیش از تایید مقدار جدید این فیلد ؛ مقدار قبلی آن به عموم
                    نمایش داده می شود.
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <span>تصویر پروانه وکالت*</span>
                  <div className="bg-[#F9F8F5] flex justify-between rounded-lg w-full h-11 border border-[#D7DBE3] p-3">
                    <label
                      htmlFor="nationalCode"
                      className="flex items-center justify-end gap-0.5 cursor-pointer"
                    >
                      <HiOutlinePaperClip className="text-[#2D91F4]" />
                      <span className="text-[#2D91F4] text-xs sm:text-sm"> انتخاب فایل</span>
                    </label>
                    <input
                      type="file"
                      accept="image/png , image/jpeg"
                      id="nationalCode"
                      hidden
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <span>استان حوزه قضایی *</span>
                  <Field
                    as="select"
                    name="JurisdictionCity"
                    className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 text-[#6D7278]"
                  >
                    <option value="تهران">تهران</option>
                  </Field>
                  <span className="text-[#6D7278] text-sm">
                    تا بیش از تایید مقدار جدید این فیلد ؛ مقدار قبلی آن به عموم
                    نمایش داده می شود.
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <span>آدرس صفحه ی اختصاصی در وبسایت کانون/مرکز وکلا</span>
                  <Field
                    type="text"
                    name="AddressPage"
                    className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 "
                  />
                </div>
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
                <div className="w-full flex flex-col justify-between items-center gap-6 lg:flex-row">
                  <button
                    className="bg-[#9DC88D] text-white w-full rounded-[25px] h-10"
                    type="button"
                  >
                    لغو
                  </button>
                  <button
                    type="submit"
                    className="bg-[#4D774E] text-white w-full rounded-[25px] h-10"
                  >
                    بروز رسانی
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
