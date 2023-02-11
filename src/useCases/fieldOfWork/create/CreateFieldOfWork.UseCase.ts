import { FieldOfWork } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const createFieldOfWork = async (
  field: Omit<FieldOfWork, "id">
): Promise<FieldOfWork> => {
  const { name } = field;

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
