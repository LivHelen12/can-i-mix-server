import { Specialist } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const updateSpecialist = async (
  specialist: Omit<Specialist, "id">,
  id: number
): Promise<Specialist> => {
  const {
    name,
    email,
    password,
    mobile,
    fieldOfWorkId,
    educationId,
    profession,
  } = specialist;

  return prisma.specialist.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password,
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
