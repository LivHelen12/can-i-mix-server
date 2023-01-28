import prisma from "../../../lib/prisma";
import { Recommended } from "@prisma/client";

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
