/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { Field, ErrorMessage, type FieldProps } from 'formik';
import { useState, useEffect, type ChangeEvent } from 'react';

interface FormikInputFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  value?: string;
  inputClassName?: string;
}

interface NumberInputProps {
  field: FieldProps['field'];
  form: FieldProps['form'];
  disabled?: boolean;
  placeholder?: string;
  name: string;
}

const NumberInput = ({
  field,
  form,
  disabled,
  placeholder,
  name,
}: NumberInputProps) => {
  const [displayValue, setDisplayValue] = useState(
    field.value ? String(field.value) : ''
  );

  useEffect(() => {
    if (field.value) {
      setDisplayValue(
        String(field.value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      );
    } else {
      setDisplayValue('');
    }
  }, [field.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // حذف اعداد فارسی و عربی
    val = val
      .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
      .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));

    // فقط عدد
    const numericValue = val.replace(/\D/g, '');

    setDisplayValue(numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    form.setFieldValue(name, numericValue ? Number(numericValue) : '');
  };

  return (
    <input
      {...field}
      value={displayValue}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleChange}
      type="text"
      className="py-2 px-4 w-full border border-sor-4 rounded-lg outline-none placeholder:text-xs disabled:text-sor-5 disabled:border-sor-3 disabled:cursor-not-allowed"
    />
  );
};

const FormikInputField = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  className = '',
  disabled = false,
  inputClassName,
  value,
}: FormikInputFieldProps) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block mb-2 lg:mb-2 text-xs md:text-sm">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      <Field name={name}>
        {(props: FieldProps) =>
          type === 'number' ? (
            <NumberInput
              {...props}
              disabled={disabled}
              placeholder={placeholder}
              name={name}
            />
          ) : (
            <input
              {...props.field}
              disabled={disabled}
              value={value}
              type={type}
              placeholder={placeholder}
              onChange={props.field.onChange}
              className={`p-2 disabled:text-global-2 disabled:border-global-2 disabled:cursor-not-allowed outline-none placeholder:text-xs ${
                inputClassName
                  ? inputClassName
                  : 'w-full rounded-lg border border-global-3 bg-global-4'
              }`}
            />
          )
        }
      </Field>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1 absolute"
      />
    </div>
  );
};

export default FormikInputField;
