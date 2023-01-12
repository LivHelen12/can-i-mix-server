import prisma from "../../lib/prisma";
import { Education } from "@prisma/client";

export const createEducation = async (
  education: Omit<Education, "id">
): Promise<Education> => {
  const { name } = education;

  return prisma.education.create({
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

export const listEducation = async (): Promise<Array<Education>> => {
  return prisma.education.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const listEducationById = async (
  id: number
): Promise<Education | null> => {
  return prisma.education.findUnique({
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

export const updateEducation = async (
  education: Omit<Education, "id">,
  id: number
): Promise<Education> => {
  const { name } = education;

  return prisma.education.update({
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

export const deleteEducation = async (id: number): Promise<void> => {
  await prisma.education.delete({
    where: {
      id,
    },
  });
};
