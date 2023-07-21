import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const ProfilePage = ({ session }) => {
  const router = useRouter();

  const logoutWithGoogle = async () => {
    try {
      await signOut("google");

      toast.info("Logged out!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      toast.warn(err.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    //get toast showing status
    const isLogInToastShown = localStorage.getItem("isLogInToastShown");

    //showing toast for sign in success
    if (isLogInToastShown) {
      toast.success("Login Successful", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      //remove item for one time toast per sign in
      localStorage.removeItem("isLogInToastShown");
    }

    //if user not signed in
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <section className='profile wrapper py-10 md:py-20 min-h-screen flex flex-col items-center'>
      {session.user.email && (
        <div
          data-aos='zoom-out-down'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          className='profile-card flex flex-col gap-3 items-center mt-10 shadow-lg w-full lg:w-2/3 p-10 mx-auto rounded-lg'
        >
          <div className='display-picture w-20 h-20 rounded-full border-2 flex border-gray-700 relative p-[6px] shadow-lg'>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={50}
              height={50}
              className='w-full object-cover border border-gray-300 rounded-full'
              priority
            />

            <span className='w-6 h-6 absolute top-0 -right-2 rounded-full text-sky-500'>
              <Image
                src='https://res.cloudinary.com/drgxflcsb/image/upload/v1684943793/learnify/verified-icon_i92d0c.png'
                alt='varified icon'
                width={20}
                height={20}
                className='w-full object-cover'
                title='Verified account'
              />
            </span>
          </div>

          <h2 className='text-lg md:text-2xl lg:text-3xl text-gray-700 mt-2'>
            Welcome,{" "}
            <span className='text-black font-semibold'>
              {session.user.name}
            </span>
          </h2>

          <p className='text-[12px] md:text-xl lg:text-xl text-gray-700'>
            Logged Account:{" "}
            <span className='text-black'>{session.user.email}</span>
          </p>

          <button
            onClick={logoutWithGoogle}
            className='flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg mt-5 hover:bg-gray-700 duration-300'
          >
            <span>
              <FiLogOut />
            </span>
            Logout
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    const destination = context.query.destination || "/users/login";

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
