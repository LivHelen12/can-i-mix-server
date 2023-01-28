import { Specialist } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const listSpecialistById = async (
  id: number
): Promise<Specialist | null> => {
  return prisma.specialist.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      cpf: true,
      mobile: true,
      fieldOfWork: true,
      education: true,
      profession: true,
      email: true,
      password: true,
      educationId: true,
      fieldOfWorkId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
