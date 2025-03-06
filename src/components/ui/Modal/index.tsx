import { useEffect, useRef } from "react";

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: any;
}) => {
  const ref: any = useRef();
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    // <div className=" fixed top-0 items-center justify-center flex z-50 w-svw h-svh">
    //   <div ref={ref}>{children}</div>
    // </div>

    <div className=" bg-[rgba(0,0,0,0.5)] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full flex md:inset-0 h-svh max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div ref={ref} className="relative bg-white rounded-lg shadow-sm ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
