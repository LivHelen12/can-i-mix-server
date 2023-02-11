import { Specialist } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const listSpecialistById = async (
  id: number
): Promise<Specialist | null> => {
  return prisma.specialist.findUnique({
    where: {
      id,
    },
    include: {
      education: true,
      fieldOfWork: true,
    },
  });
};
