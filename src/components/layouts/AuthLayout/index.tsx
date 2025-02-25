type Proptypes = {
  error?: string;
  title?: string;
  children: React.ReactNode;
};
const AuthLayout = (props: Proptypes) => {
  const { error, title, children } = props;
  return (
    <div className=" items-center justify-center h-[90svh] flex w-svw">
      <div className="w-[65%] max-w-sm ">
        <h1 className=" mb-8 text-3xl text-center text-blue-700">{title}</h1>

        {error && (
          <div className="bg-red-200 text-red-700 p-2.5 rounded-lg mb-5">
            {error}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
