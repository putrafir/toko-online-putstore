type PropTypes = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
};
const Input = (props: PropTypes) => {
  const { label, type, name, placeholder, disabled, defaultValue } = props;
  return (
    <div className="mb-5">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
        required
      />
    </div>
  );
};
export default Input;
