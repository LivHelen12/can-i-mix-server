import { FieldOfWork } from "@prisma/client";
import prisma from "../../lib/prisma";

export const listFieldOfWork = async (): Promise<Array<FieldOfWork>> => {
  return prisma.fieldOfWork.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

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
