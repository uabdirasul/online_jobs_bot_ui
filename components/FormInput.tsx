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
    <fieldset className="border border-white rounded-lg px-4 py-3">
      <legend className="text-gray-400 text-sm px-2">
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
        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0"
      />
    </fieldset>
  );
};

export default FormInput;
