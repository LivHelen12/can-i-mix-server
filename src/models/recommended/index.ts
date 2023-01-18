import prisma from "../../lib/prisma";
import { Recommended } from "@prisma/client";

export const createRecommended = async (
  recommended: Omit<Recommended, "id">
): Promise<Recommended> => {
  const { name } = recommended;

  return prisma.recommended.create({
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

export const listRecommended = async (): Promise<Array<Recommended>> => {
  return prisma.recommended.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const listRecommendedById = async (
  id: number
): Promise<Recommended | null> => {
  return prisma.recommended.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateRecommended = async (
  recommended: Omit<Recommended, "id">,
  id: number
): Promise<Recommended> => {
  const { name } = recommended;

  return prisma.recommended.update({
    where: {
      id,
    },
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

export const deleteRecommended = async (id: number): Promise<void> => {
  await prisma.recommended.delete({
    where: {
      id,
    },
  });
};
