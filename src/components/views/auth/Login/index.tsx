import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import CircleLoading from "../Icon/Loading/CircleLoading";
import GoogleIcon from "../Icon/Logo/GoogleIcon";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Invalid email or password");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Invalid email or password");
    }
  };
  return (
    <div className=" items-center justify-center h-[90svh] flex w-svw">
      <div className="w-[65%] max-w-sm ">
        <h1 className=" mb-8 text-3xl text-center text-blue-700">Login</h1>
        <Button type="button" onClick={() => signIn("google", { callbackUrl })}>
          <GoogleIcon />
          Sign in with Google
        </Button>

        <hr className="my-5" />
        {error && (
          <div className="bg-red-200 text-red-700 p-2.5 rounded-lg mb-5">
            {error}
          </div>
        )}
        <form className="mx-auto" onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="kasim@gmail.com"
          />
          <Input label="Password" name="password" type="password" />
          <div className="flex items-start mb-5">
            <p>
              Don{"'"}t have an account?{" "}
              <Link href="/auth/register" className="text-blue-700">
                Register
              </Link>
            </p>
          </div>

          <Button type="submit" variant="darkBlue">
            {isLoading ? <CircleLoading /> : ""}
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
