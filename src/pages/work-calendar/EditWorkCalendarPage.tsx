import { Form, Formik } from 'formik';
import FormikInput from '../../components/inputs/FormikInput';
import { HiOutlinePhone, HiOutlinePlusSm } from 'react-icons/hi';
import { MotionSelect } from '../../components';

export default function EditWorkCalendarPage() {
  return (
    <div className="ps-8">
      <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={async (values) => {
          const res = await values;
          console.log(res);
        }}
      >
        <Form className="flex flex-col gap-y-6">
          <FormikInput
            name="title"
            label="عنوان تقویم"
            textRight
            placeholder="نام تقویم را وارد کنید"
          />

          <div>
            <p>خدمات مورد نظر را انتخاب کنید</p>

            <div className="flex items-center gap-x-2">
              <input type="checkbox" />
              <div className="min-w-8 h-8 bg-global-25 text-accent-mint rounded-full flex items-center justify-center">
                <HiOutlinePhone size={24} />
              </div>
              <span>مشاوره تلفنی</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-2">
              <span className="bg-primary text-white w-fit px-3 py-0.5 rounded-full">
                شنبه
              </span>

              <div className="flex items-center gap-x-3">
                از
                <MotionSelect
                  options={[{ id: 1, key: 's', value: '2' }]}
                  onSelect={(val) => console.log(val)}
                />
                تا
                <MotionSelect
                  options={[{ id: 1, key: 's', value: '2' }]}
                  onSelect={(val) => console.log(val)}
                />
                <button
                  type="button"
                  className="min-w-10.5 h-10.5 rounded-2xl bg-global-5 flex items-center justify-center"
                >
                  <HiOutlinePlusSm size={22} />
                </button>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span>تعطیل</span>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-2">
              <span className="bg-primary text-white w-fit px-3 py-0.5 rounded-full">
                یکشنبه
              </span>

              <div className="flex items-center gap-x-3">
                از
                <MotionSelect
                  options={[{ id: 1, key: 's', value: '2' }]}
                  onSelect={(val) => console.log(val)}
                />
                تا
                <MotionSelect
                  options={[{ id: 1, key: 's', value: '2' }]}
                  onSelect={(val) => console.log(val)}
                />
                <button
                  type="button"
                  className="min-w-10.5 h-10.5 rounded-2xl bg-global-5 flex items-center justify-center"
                >
                  <HiOutlinePlusSm size={22} />
                </button>
              </div>
              <div className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span>تعطیل</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-y-4 gap-x-6">
            <button
              type="button"
              className="bg-global-5 text-white rounded-full w-full max-w-96 py-2.5"
            >
              لغو
            </button>
            <button
              type="button"
              className="bg-primary text-white rounded-full w-full max-w-96 py-2.5"
            >
              بروزرسانی
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
