import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const fieldOfWork = await prisma.fieldOfWork.create({
    data: {
      name: "Química",
    },
  });

  const education = await prisma.education.create({
    data: {
      name: "Graduação",
    },
  });

  const firstSubstance = await prisma.substance.create({
    data: {
      name: "Vinagre",
    },
  });

  const secondSubstance = await prisma.substance.create({
    data: {
      name: "Bicarbonato de Sódio",
    },
  });

  const recommended = await prisma.recommended.create({
    data: {
      name: "Recomendado",
    },
  });

  const notRecommended = await prisma.recommended.create({
    data: {
      name: "Não é recomendado",
    },
  });

  const specialist = await prisma.specialist.create({
    data: {
      name: "Livia Helen",
      email: "liviahelen@gmail.com",
      password: "123456",
      cpf: "50324256832",
      mobile: "11995222078",
      fieldOfWorkId: fieldOfWork.id,
      educationId: education.id,
      profession: "Professora de Química",
    },
  });

  const post = await prisma.post.create({
    data: {
      firstSubstanceId: firstSubstance.id,
      secondSubstanceId: secondSubstance.id,
      recommendedId: recommended.id,
      specialistId: specialist.id,
      description: "A mistura não faz mal",
      content:
        "Essa mistura contém os elemtos x e y que não fazem mal para a saúde de quem o utiliza",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
    process.exit(1);
  });
