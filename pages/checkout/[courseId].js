import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getSingleCourse } from "@/prisma/courses";
import SectionHeader from "@/components/SectionHeader";
import { FiCheckCircle } from "react-icons/fi";

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
  }, [session]);

  const handleCheckout = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='wrapper py-10 min-h-screen'>
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
          <div className='row w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='form-control w-full flex flex-col gap-2'>
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

            <div className='form-control w-full flex flex-col gap-2'>
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

          <div className='row w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='form-control w-full flex flex-col gap-2'>
              <label htmlFor='mobile' className='cursor-pointer'>
                Phone Number
              </label>
              <input
                className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700 duration-300'
                type='tel'
                id='mobile'
                placeholder='+8801xxxxxxxx'
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>

            <div className='form-control w-full flex flex-col gap-2'>
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
              />
            </div>
          </div>

          <div className='row w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='form-control w-full flex flex-col gap-2'>
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

            <div className='form-control w-full flex flex-col gap-2'>
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
    </div>
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
