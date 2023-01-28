import { StatusCodes } from "http-status-codes";

import prisma from "../../../lib/prisma";
import { Education } from "@prisma/client";

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
