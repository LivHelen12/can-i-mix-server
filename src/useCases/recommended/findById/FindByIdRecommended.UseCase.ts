import prisma from "../../../lib/prisma";
import { Recommended } from "@prisma/client";

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
