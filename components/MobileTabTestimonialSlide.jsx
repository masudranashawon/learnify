import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsQuote } from "react-icons/bs";

const MobileTabTestimonialSlide = ({ testimonial }) => {
  return (
    <div className='mobile-slider-wrapper h-4/6 flex items-center content-center mx-5 my-10 -z-10'>
      <div className='flex flex-col items-center content-center shadow-lg rounded-xl sm:p-10 p-5 relative mt-10'>
        {/* SLIDER IMAGE SECTION */}
        <div className='slider-image md:w-40 md:h-40 sm:w-32 sm:h-32 w-24 h-24 rounded-full overflow-hidden shadow-xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Image
            src={testimonial.displayPicture}
            alt={testimonial.alt}
            width={500}
            height={500}
            className='w-full h-full object-cover hover:scale-110 duration-[1.5s]'
            priority
          />
        </div>

        {/* QUOTAION */}
        <span className='md:text-[4rem] sm:text-[3.5rem]  text-[2.5rem] text-gray-600 absolute left-0 top-0 block'>
          <BsQuote />
        </span>

        {/* SLIDER DETAILS SECTION */}
        <div className='space-y-2 sm:space-y-5'>
          {/* STUDENT NAME */}
          <h3 className='font-bold md:text-3xl text-lg sm:text-2xl mt-16 sm:mt-20 md:mt-28 text-center'>
            {testimonial.studentName}
          </h3>

          {/* ROLE AND RATING */}
          <p className='flex justify-between font-semibold text-gray-600 md:text-2xl sm:text-xl text-md w-full'>
            <span className='role'>{testimonial.role}</span>
            <span className='flex items-center gap-1 text-black font-semibold'>
              <AiOutlineStar />
              {String(testimonial.rating).padEnd(3, ".0")}
            </span>
          </p>

          {/* STUDENT FEEDBACK */}
          <p className='text-center'>
            <span className='md:leading-[1.6] sm:text-lg text-sm text-center block mt-5'>
              {testimonial.feedback}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileTabTestimonialSlide;
