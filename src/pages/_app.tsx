import Navbar from "@/components/fragments/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const disableNavbar = ["auth", "admin", "member"];

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={session}>
      {!disableNavbar.includes(pathname.split("/")[1]) && <Navbar />}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
