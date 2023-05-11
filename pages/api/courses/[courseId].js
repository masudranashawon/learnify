import { getSingleCourse } from "@/prisma/courses";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const course = await getSingleCourse(req.query.courseId);

      return res.status(200).json(course);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
