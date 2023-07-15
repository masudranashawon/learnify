import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "How do I purchase a course?",
      answer:
        'To purchase a course, simply browse our course catalog, select the course you want, and click on the "Buy Now" button. You will be redirected to the checkout page where you can complete the payment process.',
    },
    {
      question: "Can I access the course materials immediately after purchase?",
      answer:
        "Yes, once your payment is successfully processed, you will gain immediate access to the course materials. You can start learning right away!",
    },
    {
      question: "Do you offer refunds for courses?",
      answer:
        "Refunds are available within 30 days of purchase, provided that you have not accessed more than 25% of the course content. Please refer to our refund policy for more information.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "Once you purchase a course, you will have lifetime access to the course materials. You can revisit the content at any time and learn at your own pace.",
    },
    {
      question: "Can I share my course account with others?",
      answer:
        "No, sharing your course account with others is strictly prohibited. Each course purchase grants access to a single user only. Violation of this policy may result in account suspension.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Prerequisites vary depending on the course. Some courses may require prior knowledge or experience in a specific subject. Please check the course description for detailed information about prerequisites.",
    },
    {
      question: "Are the courses accredited or certified?",
      answer:
        "Our courses are designed to provide high-quality education and valuable skills. However, they may not be accredited or certified by external educational institutions. Please refer to the course details for specific accreditation or certification information, if applicable.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "If you have any questions or need assistance, you can reach our customer support team by emailing support@courseswebsite.com or by using the contact form on our website. We strive to respond to all inquiries within 24 hours.",
    },
    {
      question: "Can I upgrade to a different course package?",
      answer:
        "Yes, depending on the course, you may have the option to upgrade to a higher-level package. Please contact our customer support team for more information and assistance with upgrading your course package.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, including Visa, Mastercard, and American Express. We also support payments through popular online payment platforms such as PayPal and Stripe.",
    },
  ];

  return (
    <section className='faqs wrapper py-10 md:py-20  min-h-screen 2xl:h-[calc(100vh-6rem)]'>
      <SectionHeader
        heading='Frequently Asked Questions'
        subHeading='FAQ'
        pera='Find answers to common questions about our courses and the purchasing process.'
      />

      <div className='max-w-3xl mx-auto px-4 py-8'>
        {faqData.map((faq, index) => (
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
