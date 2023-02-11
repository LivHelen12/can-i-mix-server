import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const listPostById = async (id: number): Promise<Post | null> => {
  return prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      firstSubstance: true,
      secondSubstance: true,
      recommended: true,
      specialist: {
        include: {
          education: true,
          fieldOfWork: true,
        },
      },
    },
  });
};
