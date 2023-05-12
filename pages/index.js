import { getAllCourses } from "@/prisma/courses";
import CoursesPage from "./courses";

const HomePage = ({ courses }) => {
  return (
    <div>
      <CoursesPage courses={courses} />
    </div>
  );
};

export default HomePage;

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
