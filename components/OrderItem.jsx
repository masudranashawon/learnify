import { useEffect, useState } from "react";
import { currencyConverter } from "@/utils/currencyConverter";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import axios from "axios";
import Image from "next/image";

const OrderItem = ({ course, i }) => {
  const [orderCourse, setOrderCourse] = useState({});

  useEffect(() => {
    const getCourse = async () => {
      try {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${course.courseId}`
          )
          .then((res) => {
            setOrderCourse(res.data);
          });
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

    getCourse();
  }, [course.courseId]);

  if (orderCourse.cover && course) {
    return (
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        data-aos-mirror='true'
        data-aos-once='false'
        className='order-item w-full shadow-md hover:shadow-xl duration-300 p-8 rounded-lg flex flex-col lg:flex-row gap-5 lg:gap-10'
      >
        <div className='order-card w-full lg:w-1/3 space-y-2'>
          <span className='font-bold uppercase'>
            course {String(i).padStart(2, 0)}
          </span>
          <div className='w-full h-auto relative overflow-hidden'>
            <Image
              src={orderCourse.cover}
              alt={course.courseTitle}
              width={500}
              height={500}
              className='w-full h-auto rounded-lg object-cover'
              priority
            />
            <span className='absolute top-3 left-3 bg-gray-200 rounded-3xl p-2 font-medium text-black text-sm'>
              {orderCourse.duration}
            </span>
          </div>
        </div>

        <div className='card-content w-full lg:w-2/3 flex justify-center flex-col gap-5'>
          <h2 className='text-2xl lg:text-4xl font-semibold'>
            {course.courseTitle}
          </h2>
          <div className='flex justify-between flex-wrap gap-2 lg:gap-0 items-center'>
            <p className='text-lg text-gray-500'>
              Price: {currencyConverter(course.amountTotal)}
            </p>
            <Button
              href={`/users/dashboard/courses/${course.courseId}`}
              placeholder={"Start Learning Now"}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default OrderItem;
