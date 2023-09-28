import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getSingleCourse } from "@/prisma/courses";
import { FiCheckCircle } from "react-icons/fi";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import axios from "axios";
import SectionHeader from "@/components/SectionHeader";

/* STRIPE PROMISE*/
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = ({ course }) => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }

    //GET TOAST SHOWING STATUS
    const isLogInToastShown = localStorage.getItem("isLogInToastShown");

    //SHOWING TOAST FOR SIGNIN SUCCESS
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

      //REMOVE ITEM FOR ONE TIME TOAST PER SIGN IN
      localStorage.removeItem("isLogInToastShown");
    }
  }, [session]);

  /*CHECKOUT HANDLER */
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    /*SEND A POST REQ. TO THE SERVER */
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
      courseId: course.id,
    });

    /* REDIRECT TO THE SRTIPE PYMENT */
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    // IF PAYMENT FAILED
    if (result.error) {
      toast.error(result.error.message, {
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

  return (
    <section className='wrapper py-10 md:py-20 min-h-screen overflow-hidden'>
      <SectionHeader
        subHeading='Checkout'
        heading='Secure Checkout Process'
        pera='Please provide the following information to personalize your learning journey and complete your course purchase.'
      />

      <div className='flex justify-center'>
        <form
          onSubmit={handleCheckout}
          className='w-full lg:w-[70rem] flex flex-col gap-5 items-center justify-center mt-10'
        >
          <div className='row w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 overflow-hidden'>
            <div
              data-aos='fade-right'
              data-aos-duration='1000'
              className='form-control w-full flex flex-col gap-2'
            >
              <label htmlFor='name' className='cursor-pointer'>
                Name
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='text'
                id='name'
                placeholder='Sarah Parker'
                value={formData.name}
                readOnly
              />
            </div>

            <div
              data-aos='fade-left'
              data-aos-duration='1000'
              data-aos-delay='1400'
              className='form-control w-full flex flex-col gap-2'
            >
              <label htmlFor='email' className='cursor-pointer'>
                Email Address
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='email'
                id='email'
                placeholder='sara@example.com'
                value={formData.email}
                readOnly
              />
            </div>
          </div>

          <div className='row w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 overflow-hidden'>
            <div
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='500'
              className='form-control w-full flex flex-col gap-2'
            >
              <label htmlFor='mobile' className='cursor-pointer'>
                Phone Number
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='tel'
                id='mobile'
                placeholder='+8801XXXXXXXXX'
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
              />
            </div>

            <div
              data-aos='fade-left'
              data-aos-delay='1800'
              data-aos-duration='1000'
              className='form-control w-full flex flex-col gap-2'
            >
              <label htmlFor='address' className='cursor-pointer'>
                Address
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='text'
                id='address'
                placeholder='San Francisco, USA'
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className='row w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 overflow-hidden'>
            <div
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='1000'
              className='form-control w-full flex flex-col gap-2'
            >
              <label htmlFor='courseTitle' className='cursor-pointer'>
                Course Title
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='text'
                id='courseTitle'
                placeholder='Advanced JavaScript Course 2023'
                value={formData.courseTitle}
                readOnly
              />
            </div>

            <div
              data-aos='fade-left'
              data-aos-duration='1000'
              data-aos-delay='2200'
              className='form-control w-full flex flex-col gap-2'
            >
              <label htmlFor='price' className='cursor-pointer'>
                Course Price (USD)
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='number'
                id='price'
                placeholder='$199'
                value={formData.price}
                readOnly
              />
            </div>
          </div>

          <button
            data-aos='zoom-in'
            data-aos-delay='2500'
            data-aos-duration='1000'
            role='link'
            type='submit'
            className='bg-black py-4 px-6 rounded-lg text-white uppercase hover:bg-gray-700 duration-300 self-end flex items-center justify-center gap-2 mt-5 w-full lg:w-auto'
          >
            <span>
              <FiCheckCircle />
            </span>
            Proceed to Checkout
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;

export const getServerSideProps = async ({ query }) => {
  const course = await getSingleCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
