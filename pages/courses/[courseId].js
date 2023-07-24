import { getSingleCourse } from "@/prisma/courses";
import { currencyConverter } from "@/utils/currencyConverter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const CourseDetails = ({ course }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleEnroll = () => {
    if (session) {
      router.push(`/checkout/${course.id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${course.id}`);
    }
  };

  return (
    <section className='wrapper py-10 md:py-20 min-h-screen overflow-hidden'>
      <div className='overflow-hidden'>
        <div
          data-aos='slide-down'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          style={{ backgroundImage: `url(${course.cover})` }}
          className='course-cover w-full h-[30rem] object-cover bg-no-repeat bg-cover bg-center'
        />
      </div>

      <div className='course-content mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0 overflow-hidden'>
        <div className='space-y-2 overflow-hidden'>
          <h2
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            className='text-3xl font-semibold'
          >
            {course.title}
          </h2>
          <div className='overflow-hidden'>
            <p
              data-aos='fade-down'
              data-aos-duration='1000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              <span className='font-semibold'>Instructor:</span>{" "}
              {course.instructor}
            </p>
          </div>
          <div className='overflow-hidden'>
            <p
              data-aos='fade-down'
              data-aos-duration='1000'
              data-aos-delay='900'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              <span className='font-semibold'>Entrolled Students:</span>{" "}
              {course.students}
            </p>
          </div>
          <div className='overflow-hidden'>
            <p
              data-aos='fade-down'
              data-aos-delay='1400'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              <span className='font-semibold'>Course Description:</span>{" "}
              {course.description}
            </p>
          </div>
        </div>

        <div className='space-y-2 overflow-hidden'>
          <p
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-delay='1800'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <span className='font-semibold'>Course Duration:</span>{" "}
            {course.duration}
          </p>
          <p
            data-aos='fade-down'
            data-aos-delay='2000'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <span className='font-semibold'>Rating:</span> {course.rating}
          </p>
          <p
            data-aos='fade-down'
            data-aos-delay='2400'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            className='text-3xl font-semibold'
          >
            Price: {currencyConverter(course.price)}
          </p>
          <button
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-delay='2500'
            data-aos-mirror='true'
            data-aos-once='false'
            onClick={handleEnroll}
            className='bg-black text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300'
          >
            Enroll now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;

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
