import prisma from "../../../lib/prisma";
import { Education } from "@prisma/client";

export const createEducation = async (
  education: Omit<Education, "id">
): Promise<Education> => {
  const { name } = education;

  return prisma.education.create({
    data: {
      name,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
