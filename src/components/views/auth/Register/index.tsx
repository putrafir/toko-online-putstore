import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import CircleLoading from "../Icon/Loading/CircleLoading";
import { authServices } from "@/services/auth";
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

    const result = await authServices.registerAccount(data);
    // const result = await fetch("/api/user/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

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
          <Input
            label="Fullname"
            type="text"
            name="fullname"
            placeholder="Ahmad Kasim"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="kasim@gmail.com"
          />
          <Input label="Phone" type="number" name="phone" />
          <Input label="Password" type="password" name="password" />

          <div className="flex items-start mb-5">
            <p>
              Have an account? Sign in{" "}
              <Link href="/auth/login" className="text-blue-700">
                here
              </Link>
            </p>
          </div>
          <Button type="submit" variant="darkBlue">
            {isLoading ? <CircleLoading /> : ""}
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
