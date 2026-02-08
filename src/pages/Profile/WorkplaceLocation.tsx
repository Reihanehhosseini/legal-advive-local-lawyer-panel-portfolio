import { Form, Formik, type FormikErrors } from "formik";
import { CgDanger } from "react-icons/cg";

interface FormValues {
  country: string;
  state: string;
  city: string;
  district: string;
  workPlaceLocation: string;
  postalCode: string;
  location: string;
}
export default function WorkplaceLocation() {
  return (
    <div className="w-full">
      <Formik
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
        initialValues={{
          country: "",
          state: "",
          city: "",
          district: "",
          workPlaceLocation: "",
          postalCode: "",
          location: "",
        }}
        validate={(values: FormValues) => {
          const errors: FormikErrors<FormValues> = {};

          return errors;
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-center ">
              <div className="w-full flex justify-center lg:justify-start lg:pr-7 lg:pl-7">
                <span className="bg-[#C8A45A1A]">
                  <CgDanger />
                  <p>
                    اطلاعات موجود در این صفحه در پروفایل حقوقی شما نمایش داده
                    شده و به صورت عمومی برای تمامی کاربران در دسترسی خواهد بود.
                  </p>
                </span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
