interface InputProps {
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  accept?: string;
  onChange: (any: any) => void;
  className?: string;
  id?: string;
  checked?: boolean;
}
const InputField: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  disabled,
  required,
  accept,
  onChange,
  className,
  id,
  checked,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      accept={accept}
      onChange={onChange}
      className={className}
      id={id}
      checked={checked}
    />
  );
};

export default InputField;
