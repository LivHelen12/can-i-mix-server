import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
  const {
    firstSubstanceId,
    secondSubstanceId,
    recommendedId,
    description,
    content,
    specialistId,
  } = post;

  return prisma.post.create({
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
