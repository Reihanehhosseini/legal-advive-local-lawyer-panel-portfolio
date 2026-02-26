import clsx from "clsx";
import { ErrorMessage, Field} from "formik";
import { type ReactNode } from "react";

interface FormikImputValues {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  textRight: boolean;
  warning?: React.ReactNode;
  as?: "input" | "textarea" | "select";
  select?: {
    id: number;
    title: string;
  }[];
  onChange?:(value:[])=>void
}
export default function FormikInput({
  label,
  required,
  name,
  type = "text",
  placeholder,
  children,
  textRight,
  warning,
  as = "input",
  select,
  onChange,
}: FormikImputValues) {
  return (
    <div className="flex flex-col gap-1.5 w-full ">
      <label htmlFor="">
        {required && <span>*</span>}
        <span>{label} </span>
      </label>
      <div
        className={clsx(
          "bg-[#F9F8F5] flex gap-1 rounded-lg items-center w-full h-11 border border-[#D7DBE3] p-3",
          textRight ? "text-right" : "text-left",
          as === "textarea" && "h-54.25 resize-none",
        )}
      >
        <Field
          as={as}
          type={type}
          name={name}
          className={clsx(
            "w-full outline-none font-light",
            as === "textarea" && "h-54.25 resize-none py-4",
          )}
          placeholder={placeholder}
        >
          {select?.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </Field>
        {warning}
      </div>

      <ErrorMessage name={name} component="span" className="text-red-700" />
      {children}
    </div>
  );
}
