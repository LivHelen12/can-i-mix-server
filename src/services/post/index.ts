import { Post } from "@prisma/client";
import prisma from "../../lib/prisma";

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

export const deletePost = async (id: number): Promise<void> => {
  await prisma.post.delete({
    where: {
      id,
    },
  });
};
