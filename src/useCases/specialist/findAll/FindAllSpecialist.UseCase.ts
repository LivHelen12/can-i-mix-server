import { Specialist } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const listSpecialist = async (): Promise<Specialist[]> => {
  return prisma.specialist.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      cpf: true,
      mobile: true,
      fieldOfWorkId: true,
      educationId: true,
      profession: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
