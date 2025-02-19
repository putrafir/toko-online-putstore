type PropTypes = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
};
const Input = (props: PropTypes) => {
  const { label, type, name, placeholder } = props;
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
        required
      />
    </div>
  );
};
export default Input;
