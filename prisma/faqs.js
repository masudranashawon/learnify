import prisma from "./prisma";

//GET ALL FAQS
export const getAllFaqs = async () => {
  const faqs = await prisma.faqs.findMany({});

  return faqs;
};
