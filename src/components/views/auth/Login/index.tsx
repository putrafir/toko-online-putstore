import Link from "next/link";

const LoginView = () => {
  return (
    <div className=" items-center justify-center h-svh flex w-svw">
      <div className="w-[65%] max-w-sm ">
        <h1 className=" mb-8 text-3xl text-center text-blue-700">Login</h1>
        <form className="mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <p>
              apakah belum memiliki akun?
              <Link href="/auth/register" className="text-blue-700okey">
                register
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
