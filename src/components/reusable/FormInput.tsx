import React, { ReactNode } from "react";

interface FormInputProps {
  inputLabel: ReactNode;
  labelFor: ReactNode;
  inputType: ReactNode;
  inputId: ReactNode;
  inputName: ReactNode;
  placeholderText: ReactNode;
  ariaLabelName: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => {
  return (
    <div className="font-general-regular mb-4">
      <label
        className="mb-1 block text-lg text-primary-dark dark:text-primary-light"
        htmlFor={labelFor !== undefined ? String(labelFor) : undefined}
      >
        {inputLabel}
      </label>
      <input
        className="text-md w-full rounded-md border border-gray-300 border-opacity-50 bg-ternary-light px-5 py-2 text-primary-dark shadow-sm dark:border-primary-dark dark:bg-ternary-dark dark:text-secondary-light"
        type={inputType !== undefined ? String(inputType) : undefined}
        id={inputId !== undefined ? String(inputId) : undefined}
        name={inputName !== undefined ? String(inputName) : undefined}
        placeholder={
          placeholderText !== undefined ? String(placeholderText) : undefined
        }
        aria-label={
          ariaLabelName !== undefined ? String(ariaLabelName) : undefined
        }
        required
      />
    </div>
  );
};

export default FormInput;
