type PropTypes = {
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "lightBlue" | "darkBlue";
  className?: string;
};
const Button = (props: PropTypes) => {
  const { type, onClick, children, variant = "lightBlue", className } = props;

  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case "lightBlue":
        return "text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-[#4285F4]/50";
      case "darkBlue":
        return " text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 ";
      default:
        return "text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-[#4285F4]/50";
    }
  };
  const buttonClasses = `w-full justify-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center  me-2 mb-2 ${getButtonClasses(
    variant
  )}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
