import prisma from "../../../lib/prisma";
import { FieldOfWork } from "@prisma/client";

export const createFieldOfWork = async (
  fieldOfWork: Omit<FieldOfWork, "id">
): Promise<FieldOfWork> => {
  const { name } = fieldOfWork;

  return prisma.fieldOfWork.create({
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
