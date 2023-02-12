import prisma from "../../../lib/prisma";
import { Substance } from "@prisma/client";

export const listSubstanceById = async (
  id: number
): Promise<Substance | null> => {
  return prisma.substance.findUnique({
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
