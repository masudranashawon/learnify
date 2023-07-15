import { getAllCourses } from "@/prisma/courses";
import { getAllTestimonials } from "@/prisma/testimonials";
import Hero from "@/components/Hero";
import CoursesPage from "./courses";
import TestimonialSlider from "./testimonials";

const HomePage = ({ courses, testimonials }) => {
  return (
    <div>
      <Hero />
      <CoursesPage courses={courses} />
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();
  const testimonials = await getAllTestimonials();

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
    },
  };
};
