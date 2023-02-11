import prisma from "../../../lib/prisma";
import { Substance } from "@prisma/client";

export const listSubstance = async (): Promise<Array<Substance>> => {
  return prisma.substance.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
