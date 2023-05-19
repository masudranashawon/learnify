import Image from "next/image";
import { currencyConverter } from "@/utils/currencyConverter";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";

const CoursesItem = ({ course }) => {
  return (
    <div className='course-card w-full  lg:w-[30rem] shadow-md rounded-md overflow-hidden'>
      <div className='course-image w-full h-[25rem] lg:h-[20rem] overflow-hidden'>
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className='w-full h-full object-cover'
        />
      </div>

      <div className='course-content p-5 space-y-2'>
        <h3 className='course-title text-3xl font-medium'>{course.title}</h3>
        <p className='flex justify-between text-gray-500'>
          <span>
            by{" "}
            <span className='font-semibold text-black'>
              {course.instructor}
            </span>
          </span>
          <span>
            Duration:{" "}
            <span className='text-black font-semibold'>{course.duration}</span>
          </span>
        </p>
        <p className='flex justify-between'>
          <span>
            Enrolled students:{" "}
            <span className='text-black font-semibold'>{course.students}</span>
          </span>
          <span className='flex items-center gap-1 text-black font-semibold'>
            <AiOutlineStar />
            {course.rating}
          </span>
        </p>
        <p className=''>{course.description.substring(0, 100)}...</p>

        <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold'>
            {currencyConverter(course.price)}
          </p>

          <Button
            href={`/courses/${course.id}`}
            placeholder='View details'
            color='primary'
            size='default'
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;
