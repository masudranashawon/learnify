import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { getSingleCourse } from "@/prisma/courses";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import prisma from "@/prisma/prisma";
import CourseVideoThumbnail from "@/components/CourseVideoThumbnail";

const CourseVideoPage = ({ course, session, customer }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [session, router]);

  if (!session && !customer) {
    return null;
  }

  return (
    <div className='wrapper py-10 md:py-20 2xl:h-[calc(100vh-6rem)] overflow-hidden'>
      <div className='course-info flex gap-10 pb-10 border-b border-gray-300 overflow-hidden'>
        {/* COURSE INFO */}
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='w-full lg:w-1/2 flex flex-col gap-5'
        >
          <h3 className='lg:text-4xl text-2xl mb-2'>{course.title}</h3>
          <p className='text-lg'>{course.description.substring(0, 200)}...</p>
          <div className='flex flex-wrap gap-2'>
            <p className='flex items-center gap-1 text-black'>
              <AiOutlineStar />
              <span className='font-semibold'>{course.rating}</span>
              <span>(ratings)</span>
            </p>
            <span className='hidden lg:block'>•</span>
            <p className='flex gap-1'>
              <span className='text-black font-semibold'>
                {course.students}
              </span>
              <span>students enrolled</span>
            </p>
          </div>
          <div className='flex flex-wrap gap-2 text-gray-500'>
            <p>
              Instructed by{" "}
              <span className='font-semibold text-black'>
                {course.instructor}
              </span>
            </p>
            <p>
              Duration{" "}
              <span className='text-black font-semibold'>
                {course.duration}
              </span>
            </p>
          </div>
        </div>

        {/* COURSE IMAGE */}
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='hidden lg:block lg:w-1/2 h-[20rem] overflow-hidden rounded-xl'
        >
          <Image
            src={course.cover}
            alt={course.title}
            width={640}
            height={360}
            priority
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='course-videos grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 md:mt-20 overflow-hidden'>
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
        <CourseVideoThumbnail />
      </div>
      <div
        data-aos='fade'
        data-aos-duration='1000'
        className='notis text-rose-500 bg-rose-200 border-rose-500 border-2 p-2 font-semibold mt-5 inline-block'
      >
        <p>Notice: Video functionality is not yet implemented !</p>
      </div>
    </div>
  );
};

export default CourseVideoPage;

export const getServerSideProps = async (context) => {
  // Access the query parameters from context
  const { query } = context;

  const course = await getSingleCourse(query.courseId);

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!customer) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  const updatedCustomer = {
    ...customer,
    createdAt: customer.createdAt.toString(),
    updatedAt: customer.updatedAt.toString(),

    orders: customer.orders.map((order) => ({
      ...order,
      createdAt: order.createdAt.toString(),
      updatedAt: order.updatedAt.toString(),
    })),
  };

  return {
    props: {
      course: updatedCourse,
      session,
      customer: updatedCustomer,
    },
  };
};
