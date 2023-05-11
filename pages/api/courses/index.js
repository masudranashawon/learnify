import { getAllCourses } from "@/prisma/courses";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const courses = await getAllCourses();

      return res.status(200).json(courses);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
