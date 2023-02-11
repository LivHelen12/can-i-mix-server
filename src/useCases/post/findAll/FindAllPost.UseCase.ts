import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";
export const listPost = async (): Promise<Post[]> => {
  return prisma.post.findMany({
    include: {
      specialist: {
        include: {
          fieldOfWork: true,
          education: true,
        },
      },
      firstSubstance: true,
      secondSubstance: true,
      recommended: true,
    },
  });
};
