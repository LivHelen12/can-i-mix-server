import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const updatePost = async (
  post: Omit<Post, "id">,
  id: number
): Promise<Post> => {
  const {
    firstSubstanceId,
    secondSubstanceId,
    recommendedId,
    description,
    content,
    specialistId,
  } = post;

  return prisma.post.update({
    where: {
      id,
    },
    data: {
      firstSubstanceId,
      secondSubstanceId,
      recommendedId,
      description,
      content,
      specialistId,
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
