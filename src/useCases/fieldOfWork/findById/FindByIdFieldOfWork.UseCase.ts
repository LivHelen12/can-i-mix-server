import { FieldOfWork } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const listFieldOfWorkById = async (
  id: number
): Promise<FieldOfWork | null> => {
  return prisma.fieldOfWork.findUnique({
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
