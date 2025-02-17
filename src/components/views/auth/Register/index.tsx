import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push } = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email is already registered");
    }
  };
  return (
    <div className=" items-center justify-center h-svh flex w-svw">
      <div className="w-[65%] max-w-sm ">
        <h1 className=" mb-8 text-3xl text-center text-blue-700">Register</h1>
        {error && (
          <div className="bg-red-200 text-red-700 p-2.5 rounded-lg mb-5">
            {error}
          </div>
        )}
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
              placeholder="Ahmad Kasim"
              required
            />
          </div>
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
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
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
              Have an account? Sign in{" "}
              <Link href="/auth/login" className="text-blue-700okey">
                here
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
