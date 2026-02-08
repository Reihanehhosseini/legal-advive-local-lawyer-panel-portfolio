import { IoCameraOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import img from "../../assets/images/dev/img.png";
import { Formik, Form, Field, type FormikErrors, ErrorMessage } from "formik";

interface FormValues {
  name: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  profileAddress: string;
  description: string;
  profileImage: any;
}
export default function PersonalInformation() {
  return (
    <div className="w-full">
      <Formik
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
        initialValues={{
          name: "",
          lastName: "",
          gender: "",
          email: "",
          phoneNumber: "",
          profileAddress: "",
          description: "",
          profileImage: null,
        }}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};

          if (!values.name) {
            errors.name = "نام الزامی است";
          } else if (values.name.length < 3) {
            errors.name = "نام باید حداقل ۳ کاراکتر باشد";
          }

          if (!values.lastName) {
            errors.lastName = "نام خانوادگی الزامی است";
          } else if (values.lastName.length < 3) {
            errors.lastName = "نام خانوادگی باید حداقل ۳ کاراکتر باشد";
          }

          if (!values.gender) {
            errors.gender = "جنسیت را انتخاب کنید";
          }

          if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "ایمیل نامعتبر است";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "شماره موبایل را وارد کنید";
          } else if (values.phoneNumber.length !== 11) {
            errors.phoneNumber = "شماره موبایل نامعتبر است ";
          }

          if (!values.profileAddress) {
            errors.profileAddress = "آدرس پروفایل الزامی است";
          }

          return errors;
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-start lg:flex-row ">
              <div className="w-full h-full flex-col items-center justify-center lg:pr-7 pl-7 lg:w-[30%]">
                <div className="flex justify-center items-center">
                  <img src={img} alt="" />
                </div>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/png , image/jpeg"
                  hidden
                  onChange={(e) => {
                    if (e.currentTarget.files) {
                      setFieldValue("profileImage", e.currentTarget.files[0]);
                    }
                  }}
                />
                <label
                  htmlFor="profileImage"
                  className="flex justify-center items-center gap-2 mt-3 bg-[#F9F8F5] text-[10px] rounded-2xl p-1 cursor-pointer"
                >
                  <IoCameraOutline className="w-6 h-6" />
                  انتخاب تصویر پروفایل
                </label>
                <div className="text-[12px] text-[#D32F2F] mt-2 text-justify w-full flex flex-col items-center lg:items-start">
                  <p>
                    آخرین عکس بارگذاری شده شما توسط کارشناسان کلینیک حقوقی رد
                    شده ,
                  </p>
                  <label
                    htmlFor="profileImage"
                    className="underline cursor-pointer"
                  >
                    لطفا عکس دیگری بارگذاری کنید
                  </label>
                </div>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center pb-11 gap-6">
                <div className="w-full flex flex-col gap-7 justify-between lg:flex-row">
                  <div className="flex flex-col gap-1 w-full">
                    <span>نام *</span>
                    <Field
                      type="text"
                      name="name"
                      className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 "
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="text-red-700"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <span>نام خانوادگی *</span>
                    <Field
                      type="text"
                      name="lastName"
                      className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 "
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="text-red-700"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <div className="flex flex-col gap-1">
                    <span>جنسیت</span>
                    <Field
                      as="select"
                      name="gender"
                      id=""
                      className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 text-[#6D7278]"
                    >
                      <option selected disabled>
                        جنسیت خود را وارد کنید
                      </option>
                      <option value="مرد">مرد</option>
                      <option value="زن">زن</option>
                    </Field>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <span>پست الکترونیکی</span>
                  <Field
                    type="email"
                    name="email"
                    className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3 focus:border-[#F1B24A] outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-700"
                  />
                  <p className="text-sm text-[#F1B24A] mt-2">
                    آدرس ایمیل شما در سایت نمایش داده نمی‌شود
                  </p>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <span>شماره تلفن همراه</span>
                  <Field
                    type="text"
                    name="phoneNumber"
                    className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3"
                  />
                  {values.phoneNumber && values.phoneNumber.length === 11 ? (
                    <span className="text-[#34C759]">
                      این مورد در انتظار بررسی کارشناسان است و پس از تایید اعمال
                      خواهد شد.
                    </span>
                  ) : (
                    <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="text-red-700"
                    />
                  )}
                </div>
              </div>
            </div>
            <hr className="border-[#D7DBE3]" />
            <div className="w-full flex mt-8 flex-col lg:flex-row">
              <div className="w-full h-full flex-col items-center justify-center lg:p-7 lg:w-[30%]">
                <ul className="list-disc list-inside flex flex-col gap-8 mb-5">
                  <li className="text-[#6D7278] text-sm">
                    اعمال تغییرات هر یک از فیلدهای زیر منوط به تأیید کارشناسان
                    خواهد بود.
                  </li>
                  <li className="text-[#6D7278] text-sm text-justify">
                    در صورتی که «تیتر پروفایل» یا «بیوگرافی» در وضعیت بررسی قرار
                    داشته باشند، تا زمان تأیید یا رد درخواست قبلی، امکان ویرایش
                    هیچ‌یک از این دو فیلد وجود نخواهد داشت.
                  </li>
                </ul>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col gap-1 w-full">
                      <span>آدرس پروفایل حقوقی *</span>
                      <Field
                        type="text"
                        name="profileAddress"
                        className="bg-[#F9F8F5] rounded-lg w-full h-11 border border-[#D7DBE3] p-3"
                      />
                    </div>
                    <div className="hidden lg:flex w-full justify-end items-center text-[20px] font-light ">
                      {`https://clinickhoghooghi/${values.profileAddress}`}
                    </div>
                  </div>
                  <div className="flex items-start gap-1 text-[#F1B24A] text-sm">
                    <CgDanger className="hidden lg:flex w-6 h-4" />
                    توجه داشته باشید که امکان تغییر آدرس پروفایل حقوقی تنها
                    یک‌بار وجود دارد و این تغییر پس از تأیید کارشناسان اعمال
                    خواهد شد.
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2 mt-8">
                  <span>بیوگرافی</span>
                  <Field
                    as="textarea"
                    name="description"
                    className="bg-[#F9F8F5] h-54.25 border border-[#D7DBE3] rounded-lg mt-1"
                  />
                  <p className="text-sm">
                    بخش بیوگرافی صرفاً برای معرفی شخص شما در نظر گرفته شده است؛
                    لطفاً از درج اطلاعات تماس، نام مؤسسه و هرگونه دعوت به انجام
                    وکالت یا موارد مشابه خودداری فرمایید.
                  </p>
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
