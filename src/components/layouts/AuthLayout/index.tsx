const AuthLayout = () => {
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
