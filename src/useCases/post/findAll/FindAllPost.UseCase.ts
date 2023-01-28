import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";
export const listPost = async (): Promise<Post[]> => {
  return prisma.post.findMany({
    select: {
      id: true,
      firstSubstanceId: true,
      secondSubstanceId: true,
      recommendedId: true,
      description: true,
      content: true,
      specialistId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
