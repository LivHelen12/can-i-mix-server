import prisma from "../../../lib/prisma";

export const listPostById = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    include: { firstSubstance: true, secondSubstance: true },
  });

  if (!post) {
    throw new Error("Post não encontrado");
  }

  const specialist = await prisma.specialist.findUnique({
    where: {
      id: post.specialistId,
    },
    select: {
      name: true,
      education: true,
      fieldOfWork: true,
    },
  });

  return { ...post, specialist };
};
