import prisma from "../../../lib/prisma";
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
