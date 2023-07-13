import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsQuote } from "react-icons/bs";
import clsx from "clsx";

const TestimonialSlide = ({ testimonial, index, currentSlide }) => {
  // SINGLE SLIDER
  return (
    <div
      className={clsx(
        `slide w-full lg:w-1/5 flex items-center content-center ${
          currentSlide === index ? "opacity-100" : "opacity-0"
        } duration-1000 delay-500 p-2 lg:p-5`
      )}
    >
      {/* PC VERSION SLIDE */}
      <div className='hidden lg:block xl:w-[25rem] xl:h-[25rem] lg:w-[20rem] lg:h-[20rem] relative'>
        {/* SLIDER IMAGE SECTION*/}
        <div className='w-full h-full overflow-hidden rounded-xl'>
          <Image
            src={testimonial.displayPicture}
            alt={testimonial.alt}
            width={500}
            height={500}
            className='w-full h-full object-cover hover:scale-110 duration-[1.5s]'
            priority
          />
        </div>

        {/* SLIDER DETAILS SECTION */}
        <div className='absolute xl:w-[25rem] xl:left-[20rem] lg:left-[15rem] lg:w-[20rem] top-1/2 -translate-y-1/2 bg-white xl:p-5 lg:p-3 shadow-lg border-gray-500 border-l-[1rem] rounded-xl'>
          <div className='border-gray-300 border-l-[2px] pl-5 lg:pl-3'>
            <p className='max-h-[10rem] relative mb-5'>
              {/* QUOTAION */}
              <span className='text-6xl text-gray-600 absolute -top-12 -left-4'>
                <BsQuote />
              </span>
              {/* FEEDBACK */}
              <span className='lg:leading-[1]'>
                {String(testimonial.feedback).substring(0, 210)}
              </span>
            </p>
            {/* STUDENT NAME */}
            <h3 className='font-bold'>{testimonial.studentName}</h3>
            {/* ROLE AND RATING */}
            <p className='flex justify-between font-semibold text-gray-600'>
              <span className='role'>{testimonial.role}</span>
              <span className='flex items-center gap-1 text-black font-semibold'>
                <AiOutlineStar />
                {String(testimonial.rating).padEnd(3, ".0")}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION SLIDE */}
      <div className='mobile-slide lg:hidden w-full p-10 mt-24'>
        <div className='w-[95%] mobile-slider-wrapper shadow-xl rounded-xl p-10 relative'>
          {/* SLIDER IMAGE SECTION*/}
          <div className='w-40 h-40 overflow-hidden rounded-full shadow-xl absolute left-1/2 -top-1/2 -translate-x-1/2 translate-y-1/2'>
            <Image
              src={testimonial.displayPicture}
              alt={testimonial.alt}
              width={50}
              height={50}
              className='w-full h-full object-cover hover:scale-110 duration-[1.5s]'
              priority
            />
          </div>

          {/* QUOTAION */}
          <span className='text-[8rem] text-gray-600 absolute left-0 top-0 -translate-y-1/2 block'>
            <BsQuote />
          </span>

          {/* SLIDER DETAILS SECTION */}
          <div className='mt-14'>
            {/* STUDENT NAME */}
            <h3 className='font-bold text-4xl text-center'>
              {testimonial.studentName}
            </h3>
            {/* ROLE AND RATING */}
            <p className='flex justify-between font-semibold text-gray-600 text-3xl my-5'>
              <span className='role'>{testimonial.role}</span>
              <span className='flex items-center gap-1 text-black font-semibold'>
                <AiOutlineStar />
                {String(testimonial.rating).padEnd(3, ".0")}
              </span>
            </p>
            {/* FEEDBACK */}
            <p className='text'>
              <span className='leading-[1.6] text-[1.5rem] text-center block mt-5'>
                {String(testimonial.feedback).substring(0, 210)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
