import { Specialist } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const createSpecialist = async (
  specialist: Omit<Specialist, "id">
): Promise<Specialist> => {
  const {
    name,
    email,
    password,
    cpf,
    mobile,
    fieldOfWorkId,
    educationId,
    profession,
  } = specialist;

  return prisma.specialist.create({
    data: {
      name,
      email,
      password,
      cpf,
      mobile,
      fieldOfWorkId,
      educationId,
      profession,
    },
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
