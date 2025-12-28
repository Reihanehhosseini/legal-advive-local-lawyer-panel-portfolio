import { Form, Formik } from 'formik';
import { Info } from 'lucide-react';
import { FormikInputField } from '../../components/inputs';

export default function RequestConsultationPage() {
  // ==========================================================================================================|
  // ============================================>Static Data<=================================================|
  // ==========================================================================================================|

  const listData = [
    {
      id: 1,
      text: 'پرسش و پاسخ حقوقی آنلاین ماهیت مشاوره‌ای نداشته و صرفا جهت رفع ابهامات شما در خصوص خدمات و مسائل روزمره حقوقی شما است.',
    },
    {
      id: 2,
      text: 'مدت زمان تایید و پاسخگویی پرسش‌ها معمولا بین ۱۲ الی ۷۲ ساعت بوده و کلینیک حقوقی هیچ تعهدی نسبت به پیگیری پاسخگویی ندارد.',
    },
    {
      id: 3,
      text: 'پیشنهاد می‌شود جهت دریافت نتیجه مطلوب و صرفه جویی در زمان از مشاوره حقوقی آنلاین و تلفنی استفاده فرمایید.',
    },
    { id: 4, text: 'پرسش شما به‌صورت ناشناس و عمومی در سایت مطرح خواهد شد.' },
  ];

  // ==========================================================================================================|
  // ============================================>JSX<=========================================================|
  // ==========================================================================================================|

  return (
    <div className="border border-global-3 rounded-2xl min-h-screen px-7 py-16">
      <div className="mb-8">
        <p className="mb-2">پیش از درج پرسش خود به نکات زیر توجه فرمایید.</p>
        <ul className="list-disc list-inside">
          {listData && listData.length > 0
            ? listData.map((i) => (
                <li key={i.id} className="font-light ms-2 mb-1">
                  {i.text}
                </li>
              ))
            : null}
        </ul>
      </div>

      <div className="text-center py-2 border border-primary text-primary rounded-full flex items-center justify-center gap-x-2 mb-8 text-xs lg:text-sm">
        <Info size={18} className="min-w-5 ms-2 lg:ms-0" />
        <p>
          برای دریافت پاسخ دقیق تر و سریع تر :مشاوره حقوقی چت آنلاین یا تلفنی را
          امتحان کنید.{' '}
        </p>
      </div>

      <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={(v) => {
          console.log(v);
        }}
      >
        <Form className="grid gap-y-7">
          <div>
            <FormikInputField
              label="عنوان"
              name="title"
              placeholder="مثال: شکایت به خاطر استفاده از ملک تجاری به جای ملک مسکونی "
            />
            <p className="text-xs font-light ps-4 mt-1 text-text-secondary">
              عنوان پرسش باید یک جمله فارسی و کمتر از ۱۱ کلمه باشد توضیحات را در
              فیلد متن پرسش وارد کنید.
            </p>
          </div>
          <FormikInputField
            label="متن پرسش"
            name="title"
            placeholder="متن پرسش خود را وارد کنید..."
          />
          <div className="flex items-center gap-x-1 mb-16">
            <input type="checkbox" />
            <p className="text-xs font-light text-text-secondary">
              شرایط و قوانین مربوط به مشاوره حقوقی آنلاین کلینیک حقوقی را می
              پذیرم.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-primary text-white rounded-full py-2 w-80 max-w-96 hover:bg-secondary transition-all duration-200 ease-linear">
              ثبت سوال{' '}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
