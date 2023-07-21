import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function App({ Component, pageProps, session }) {
  useEffect(() => {
    AOS.init();
  }, []);

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
