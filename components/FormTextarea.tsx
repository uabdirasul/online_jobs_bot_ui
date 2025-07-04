interface FormTextareaProps {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const FormTextarea = ({
  label,
  id,
  placeholder,
  required,
  minLength,
  maxLength,
  value,
  onChange,
  rows = 4
}: FormTextareaProps) => {
  return (
    <fieldset className="border border-white rounded-lg px-4 py-3 focus-within:border-blue-400 transition-colors duration-200">
      <legend className="text-gray-400 text-sm px-2">
        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
      </legend>
      <textarea
        id={id}
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
        {...(minLength !== undefined ? { minLength } : {})}
        {...(maxLength !== undefined ? { maxLength } : {})}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none p-0 resize-none"
      />
    </fieldset>
  );
};

export default FormTextarea;
