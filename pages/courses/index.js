import CoursesItem from "@/components/CoursesItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courses";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CoursesPage = ({ courses }) => {
  let isLogInToastShown;

  useEffect(() => {
    //get toast showing status
    let isLogInToastShown = localStorage.getItem("isLogInToastShown");

    //showing toast for sign in success\
    if (isLogInToastShown) {
      toast.success("Login Successful", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      //remove item for one time toast per sign in
      localStorage.removeItem("isLogInToastShown");
    }
  }, [isLogInToastShown]);

  return (
    <div className='courses wrapper py-10'>
      <SectionHeader
        subHeading='Courses'
        heading='Explore the World of Online Learning'
        pera="Browse all courses and find the perfect one for you. Whether you want
          to learn a new skill, advance your career, or simply expand your
          knowledge, there's an online course for you."
      />

      <div className='courses-wrapper flex flex-wrap gap-10 mt-10 justify-center'>
        {courses?.map((course) => (
          <CoursesItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
