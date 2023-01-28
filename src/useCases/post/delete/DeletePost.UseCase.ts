import { Post } from "@prisma/client";
import prisma from "../../../lib/prisma";

export const deletePost = async (id: number): Promise<void> => {
  await prisma.post.delete({
    where: {
      id,
    },
  });
};
