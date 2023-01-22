import prisma from "../../lib/prisma";
import { Substance } from "@prisma/client";

export const createSubstance = async (
  substance: Omit<Substance, "id">
): Promise<Substance> => {
  const { name } = substance;

  return prisma.substance.create({
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

export const listSubstance = async (): Promise<Array<Substance>> => {
  return prisma.substance.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const listSubstanceById = async (
  id: number
): Promise<Substance | null> => {
  return prisma.substance.findUnique({
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
