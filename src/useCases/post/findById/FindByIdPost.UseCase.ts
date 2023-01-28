import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const listPostById = async (id: number): Promise<Post | null> => {
  return prisma.post.findUnique({
    where: {
      id,
    },
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
