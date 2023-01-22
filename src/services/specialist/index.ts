import { Specialist } from "@prisma/client";
import prisma from "../../lib/prisma";

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

export const deleteSpecialist = async (id: number): Promise<void> => {
  await prisma.specialist.delete({
    where: {
      id,
    },
  });
};
