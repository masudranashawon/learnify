import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
