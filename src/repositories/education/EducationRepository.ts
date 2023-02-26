import prisma from "../../lib/prisma";

export default new class EducationRepository {
   async findAll()  {
    const educations = await prisma.education.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return educations;
  }

  async findById(id: number) {
    const education = await prisma.education.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return education;
  }

  async create(name: string){
    const education = await prisma.education.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return education;
  }

  async update(id: number, name: string){
    const education = await prisma.education.update({
      data: {
        name,
      },
      where: {
        id,
      }
    });

    return education;
  }

  async delete(id: number){
    await prisma.education.delete({
      where: {
        id
      }
    })
  }
}
