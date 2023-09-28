import { useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "@/components/Button";

const SuccessPage = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  return (
    <section className='success wrapper py-10 md:py-20 min-h-screen 2xl:h-[calc(100vh-6rem)] flex justify-center overflow-hidden'>
      <div className='text-center w-full lg:w-[50rem] flex flex-col items-center space-y-2 overflow-hidden'>
        <div
          data-aos='fade-down'
          data-aos-duration='1000'
          className='flex justify-center items-center gap-2 text-2xl lg:text-3xl'
        >
          <span className='text-emerald-500'>
            <AiOutlineCheckCircle />
          </span>
          <h2 className='font-medium'>
            {"Congratulations! You've successfully enrolled."}
          </h2>
        </div>
        <p
          data-aos='fade-down'
          data-aos-delay='1000'
          data-aos-duration='1000'
          className='text-lg text-center text-gray-500'
        >
          {`Thank you for choosing to enhance your skills and knowledge with our
          course. We are excited to have you as a student, and we can't wait to
          embark on this educational journey together.`}
        </p>
        <div data-aos='zoom-in' data-aos-delay='1500' data-aos-duration='1000'>
          <Button href='/orders' placeholder='Go to your orders' />
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
