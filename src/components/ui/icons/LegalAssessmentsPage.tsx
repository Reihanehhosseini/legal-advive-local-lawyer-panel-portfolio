import { Form, Formik } from 'formik';
import { InfoIcon } from './InfoIcon';
import { FormikInputField } from '../../inputs';

export default function LegalAssessmentsPage() {
  return (
    <div className="p-4">
      {/*  */}
      <div className="grid gap-y-2.5 mb-7">
        <p className="text-base text-primary font-bold">
          با ثبت درخواست ارزیابی،{' '}
        </p>
        <p>در سریع ترین زمان بهترین راهکار را دریافت خواهید کرد</p>
        <p className="text-text-secondary font-light">
          شما مشکل و یا نیاز حقوقی و قضائی خود را برای متخصصین بنیاد وکلا ارسال
          میکنید، کارشناسان و متخصصین کلینیک حقوقی پس از بررسی و ارزیابی دقیق
          درخواست شما، مسیر مناسب جهت پیگیری مشکل حقوقی‌تان را به شما
          اطلاع‌رسانی می‌کنند.
        </p>
      </div>

      {/*  */}
      <div className="border border-primary px-5 py-4 rounded-2xl mb-5">
        <div className="flex items-start gap-x-1 text-primary">
          <InfoIcon />
          <div>
            <p>کاربر گرامی</p>
            <p>
              به علت حجم بسیار بالای درخواست ارزیابی حقوقی و تعهد کلینیک حقوقی
              به زمان پاسخگویی، امکان درج درخواست ارزیابی حقوقی میسر نیست.جهت
              دریافت مشاوره حقوقی پیشنهاد می‌کنیم از مشاوره حقوقی تلفنی استفاده
              فرمایید. ّ
            </p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={(v) => console.log(v)}
      >
        <Form className="grid grid-cols-2 gap-x-10 gap-y-8">
          <div className="col-span-2 w-full">
            <FormikInputField
              name="title"
              placeholder="درخواست حقوقی خود را به فارسی بنویسید."
              label="شرح درخواست"
              required
            />
            <p className="text-xs mt-1 ps-2 text-text-secondary font-light">
              شرح درخواست باید بیشتر از ۳۰ کاراکتر باشد
            </p>
          </div>
          <FormikInputField
            className="col-span-2 lg:col-span-1"
            name="title"
            label=" استان محل سکونت"
          />
          <FormikInputField
            className="col-span-2 lg:col-span-1"
            name="title"
            label="شهر محل سکونت"
          />

          <div>
            <p className="text-text-secondary mb-2">فایل پیوست</p>
            <div className="bg-global-4 px-2 py-3"></div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
