import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      // await signIn("google");
      await signIn("google");

      //set item for showing login success toast
      localStorage.setItem("isLogInToastShown", "true");
    } catch (err) {
      toast.error(err.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/users/profile";

      router.replace(destination);
    }
  }, [router, session]);

  if (!session) {
    return (
      <section className='login wrapper py-10 md:py-20 min-h-screen'>
        <SectionHeader
          subHeading='Login'
          heading='Get started with Google'
          pera='Please login to continue with our features!'
        />

        <div className='flex justify-center mt-10'>
          <button
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='1500'
            className='flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-700 duration-300'
            onClick={loginWithGoogle}
          >
            <span>
              <FcGoogle />
            </span>{" "}
            Sign in with Google
          </button>
        </div>
      </section>
    );
  }
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
