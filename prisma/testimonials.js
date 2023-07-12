import prisma from "./prisma";

//GET ALL TESTIMONIALS
export const getAllTestimonials = async () => {
  const testimonials = await prisma.testimonial.findMany({});

  return testimonials;
};
