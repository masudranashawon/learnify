import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
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
      <div className='login wrapper py-10 min-h-screen'>
        <SectionHeader
          subHeading='Login'
          heading='Get started with Google'
          pera='Please login to continue with our features!'
        />

        <div className='flex justify-center mt-10'>
          <button
            className='flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-700 duration-300'
            onClick={loginWithGoogle}
          >
            <span>
              <FcGoogle />
            </span>{" "}
            Sign in with Google
          </button>
        </div>
      </div>
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
