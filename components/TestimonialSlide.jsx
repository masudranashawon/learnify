import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsQuote } from "react-icons/bs";
import clsx from "clsx";

const TestimonialSlide = ({ testimonial, index, currentSlide }) => {
  // SINGLE SLIDER
  return (
    <div
      className={clsx(
        `slide w-1/5 flex items-center content-center ${
          currentSlide === index ? "opacity-100" : "opacity-0"
        } duration-1000 delay-500 p-5`
      )}
    >
      <div className='xl:w-[25rem] xl:h-[25rem] lg:w-[20rem] lg:h-[20rem] relative'>
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
        <div className='absolute xl:w-[25rem] xl:left-[20rem] lg:left-[16rem] lg:w-[20rem] top-1/2 -translate-y-1/2 bg-white xl:p-5 lg:p-3 shadow-lg border-gray-500 border-l-[1rem] rounded-xl'>
          <div className='border-gray-300 border-l-[2px] pl-5'>
            <p className='max-h-[10rem] relative mb-5'>
              <span className='text-6xl text-gray-600 absolute -top-12 -left-4'>
                <BsQuote />
              </span>
              <span className='lg:leading-[1]'>
                {String(testimonial.feedback).substring(0, 210)}
              </span>
            </p>
            <h3 className='font-bold'>{testimonial.studentName}</h3>
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
    </div>
  );
};

export default TestimonialSlide;
