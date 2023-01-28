import prisma from "../../../lib/prisma";
import { Education } from "@prisma/client";

export const listEducation = async (): Promise<Array<Education>> => {
  return prisma.education.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
