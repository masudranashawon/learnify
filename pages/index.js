import { getAllCourses } from "@/prisma/courses";
import { getAllTestimonials } from "@/prisma/testimonials";
import { getAllFaqs } from "@/prisma/faqs";
import Head from "next/head";
import CoursesPage from "./courses";
import TestimonialSlider from "./testimonials";
import AboutPage from "./about";
import FAQSection from "./faqs";
import ContactPage from "./contact";
import Hero from "@/components/Hero";

const HomePage = ({ courses, testimonials, faqs }) => {
  return (
    <>
      <Head>
        <title>Learnify | Empowering minds inspiring growth</title>
        <meta
          name='description'
          content='Discover a world of knowledge and excellence at Learnify. We offer a wide range of comprehensive courses and expert-led programs designed to empower learners of all ages. Unlock your potential, pursue your passions, and embark on a journey of continuous growth. Join our vibrant learning community today.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='../public/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <AboutPage />
        <CoursesPage courses={courses} />
        <TestimonialSlider testimonials={testimonials} />
        <FAQSection faqs={faqs} />
        <ContactPage />
      </main>
    </>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const testimonials = await getAllTestimonials();

  const faqs = await getAllFaqs();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  const updatedTestimonials = testimonials.map((testimonial) => ({
    ...testimonial,
    updatedAt: testimonial.updatedAt.toString(),
    createdAt: testimonial.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
      testimonials: updatedTestimonials,
      faqs,
    },
  };
};
