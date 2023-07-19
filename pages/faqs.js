import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { getAllFaqs } from "@/prisma/faqs";
import SectionHeader from "@/components/SectionHeader";

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
    <section className='faqs wrapper py-10 md:py-20  min-h-screen 2xl:h-[calc(100vh-6rem)]'>
      <SectionHeader
        heading='Frequently Asked Questions'
        subHeading='FAQ'
        pera='Find answers to common questions about our courses and the purchasing process.'
      />

      {/* FAQ's MAIN SECTION */}
      <div className='max-w-3xl mx-auto px-4 py-8'>
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
                className={` px-4 py-2 bg-white border border-gray-300 rounded-b-lg`}
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
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
