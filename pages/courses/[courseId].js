import { getSingleCourse } from "@/prisma/courses";

const CourseDetails = ({ course }) => {
  return <div>Course Details page</div>;
};

export default CourseDetails;

export const getServerSideProps = async ({ query }) => {
  const course = await getSingleCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
