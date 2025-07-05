interface FormInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  required = false,
  minLength,
  maxLength,
  pattern,
  value,
  onChange
}: FormInputProps) => {
  return (
    <fieldset className="border border-gray-400 dark:border-white rounded-lg px-4 py-3 focus-within:border-blue-600 dark:focus-within:border-blue-400 transition-colors duration-200">
      <legend className="text-gray-800 dark:text-gray-400 text-sm px-2">
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      </legend>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(minLength !== undefined ? { minLength } : {})}
        {...(maxLength !== undefined ? { maxLength } : {})}
        {...(pattern ? { pattern } : {})}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none border-none p-0"
      />
    </fieldset>
  );
};

export default FormInput;
