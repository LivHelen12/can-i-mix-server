import prisma from "../../../lib/prisma";

export const deleteSpecialist = async (id: number): Promise<void> => {
  await prisma.specialist.delete({
    where: {
      id,
    },
  });
};
