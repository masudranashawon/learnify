import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { getAllFaqs } from "@/prisma/faqs";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const FAQSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className='faqs wrapper py-10 md:py-20 2xl:h-[calc(100vh-6rem)]'>
      <SectionHeader
        heading='Frequently Asked Questions'
        subHeading='FAQ'
        pera='Find answers to common questions about our courses and the purchasing process.'
      />

      {/* FAQ's MAIN SECTION */}
      <div className='w-full flex gap-10 mt-10'>
        <div className='hidden lg:block w-1/2'>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='800'
            data-aos-duration='1000'
            className='w-full h-[50rem] overflow-hidden rounded-xl'
          >
            <Image
              src='https://images.pexels.com/photos/5428825/pexels-photo-5428825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Hands on Top of Paper Crafts'
              width={1910}
              height={2861}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div
          data-aos='zoom-in-down'
          data-aos-delay='1000'
          data-aos-duration='1000'
          className='w-full lg:w-1/2'
        >
          {faqs.map((faq, index) => (
            <div key={index} className='mb-4'>
              <button
                className='w-full flex items-center justify-between p-4 rounded-lg bg-white border border-gray-300 mb-2'
                onClick={() => toggleAccordion(index)}
              >
                <span className='font-semibold'>{faq.question}</span>
                <span>
                  {activeIndex === index ? (
                    <FiChevronUp size={30} />
                  ) : (
                    <FiChevronDown size={30} />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div
                  className={`px-4 py-2 bg-white border border-gray-400 rounded-b-lg shadow-lg`}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

export const getServerSideProps = async () => {
  const faqs = await getAllFaqs();

  return {
    props: {
      faqs,
    },
  };
};
