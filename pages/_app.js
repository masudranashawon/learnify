import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer />
        <Footer />
      </SessionProvider>
    </>
  );
}
