import { Form, Formik, type FormikErrors } from "formik";
import FormikInput from "../../components/inputs/FormikInput";
import { countries } from "../../utils/mockLocation";
import Map from "../../components/map/Map";
import ButtonFormik from "../../components/inputs/ButtonFormik";
import { CgDanger, IoSearchSharp } from "../../assets/icons/icons";
import { type workPlaceValue } from "../../types/formValues/FormValues";


const initialValues: workPlaceValue = {
  country: "",
  provincess: "",
  city: "",
  district: "",
  workPlaceLocation: "",
  postalCode: "",
  location: "",
};
export default function WorkplaceLocation() {
  return (
    <div className="w-full">
      <Formik<workPlaceValue>
        onSubmit={(values: workPlaceValue) => {
          console.log(values);
        }}
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<workPlaceValue> = {};

          return errors;
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-center ">
              <div className="w-full flex justify-center lg:justify-start lg:pr-7 lg:pl-7">
                <span className="bg-[#C8A45A1A] flex items-center gap-2 p-2.5 rounded-2xl">
                  <CgDanger className="text-[#F1B24A]" />
                  <p className="text-[#F1B24A]">
                    اطلاعات موجود در این صفحه در پروفایل حقوقی شما نمایش داده
                    شده و به صورت عمومی برای تمامی کاربران در دسترسی خواهد بود.
                  </p>
                </span>
              </div>
              <div className="w-full flex flex-col mt-11.75 lg:pr-7 lg:pl-7 lg:flex-row">
                <div className="w-full h-full flex-col items-center justify-center lg:p-7 lg:w-[30%]">
                  <h1 className="text-[#6D7278] font-bold">دقت داشته باشید</h1>
                  <ul className="list-disc list-inside flex flex-col gap-2 lg:gap-8 mb-5">
                    <li className="text-[#6D7278] text-sm text-justify">
                      اعمال تغییرات هر یک از فیلدهای زیر منوط به تأیید کارشناسان
                      خواهد بود.
                    </li>
                    <li className="text-[#6D7278] text-sm text-justify">
                      در صورتی که «تیتر پروفایل» یا «بیوگرافی» در وضعیت بررسی
                      قرار داشته باشند، تا زمان تأیید یا رد درخواست قبلی، امکان
                      ویرایش هیچ‌یک از این دو فیلد وجود نخواهد داشت.
                    </li>
                  </ul>
                </div>
                <div className="w-full flex gap-6 flex-col items-center">
                  <div className="w-full flex flex-col justify-center gap-6 lg:flex-row">
                    <FormikInput
                      label="کشور"
                      name="country"
                      required
                      textRight
                      as="select"
                      select={countries}
                      onChange={(value: any) => {
                        console.log(value.name);
                      }}
                    />
                    <FormikInput
                      label="استان"
                      name="provincess"
                      required
                      textRight
                      as="select"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center gap-6 lg:flex-row">
                    <FormikInput
                      label="شهر"
                      name="city"
                      required
                      textRight
                      as="select"
                      select={[
                        { id: 2, title: "ایران" },
                        { id: 1, title: "ترکیه" },
                        { id: 1, title: "عمان" },
                      ]}
                    />
                    <FormikInput
                      label="محله"
                      name="district"
                      required
                      textRight
                      as="select"
                      select={[
                        { id: 2, title: "تهران" },
                        { id: 1, title: "اصفهان" },
                        { id: 1, title: "شیراز" },
                      ]}
                    />
                  </div>
                  <div className="w-full flex justify-center gap-6">
                    <FormikInput
                      label="آدرس محل کار"
                      name="workPlaceLocation"
                      required
                      as="textarea"
                      textRight
                      placeholder="آدرس محل کار خود را وارد کنید"
                    />
                  </div>
                  <div className="w-full flex justify-center gap-6">
                    <FormikInput
                      label="کد پستی"
                      name="postalCode"
                      required
                      type="text"
                      textRight={false}
                      placeholder="کد پستی محل کار خود را وارد کنید ..."
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center gap-6">
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[10px] vxs:text-[13.5px] lg:text-sm">
                        موقعیت مکانی روی نقشه
                      </span>
                      <div className="border border-[#D7DBE3] flex items-center justify-between p-2 rounded-md">
                        <input
                          type="text"
                          placeholder="جست و جوی آدرس"
                          className="text-[12px] lg:w-67.25 outline-none"
                        />
                        <IoSearchSharp />
                      </div>
                    </div>
                    <Map />
                  </div>
                  <div className="w-full flex items-center gap-1">
                    <input type="checkbox" name="" id="" />
                    <label
                      htmlFor=""
                      className="text-[10px] sm:text-sm lg:text-sm"
                    >
                      با نمایش عمومی این اطلاعات در پروفایل حقوقی خود در وب‌سایت
                      بنیاد وکلا موافقم.
                    </label>
                  </div>
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
