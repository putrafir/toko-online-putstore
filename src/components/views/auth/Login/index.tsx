import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import CircleLoading from "../Icon/Loading/CircleLoading";
import GoogleIcon from "../Icon/Logo/GoogleIcon";
import AuthLayout from "@/components/layouts/AuthLayout";

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
    <AuthLayout title="Login" error={error}>
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
      <Button type="button" onClick={() => signIn("google", { callbackUrl })}>
        <GoogleIcon />
        Sign in with Google
      </Button>
    </AuthLayout>
  );
};

export default LoginView;
