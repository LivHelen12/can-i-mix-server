import { FieldOfWork } from "@prisma/client";
import prisma from "../../lib/prisma";

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

export const updateFieldOfWork = async (
  fieldOfWork: Omit<FieldOfWork, "id">,
  id: number
): Promise<FieldOfWork> => {
  const { name } = fieldOfWork;

  return prisma.fieldOfWork.update({
    where: {
      id,
    },
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

export const deleteFieldOfWorking = async (id: number): Promise<void> => {
  await prisma.fieldOfWork.delete({
    where: {
      id,
    },
  });
};
