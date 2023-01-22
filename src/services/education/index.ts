import ApiError from "../../utils/api-error";
import { StatusCodes } from "http-status-codes";

import prisma from "../../lib/prisma";
import { Education } from "@prisma/client";

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
  if (!id || typeof id !== "number") {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      "Id is required ad must be a number"
    );
  }

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
