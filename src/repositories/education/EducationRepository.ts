import { Education } from "../../api/education";
import prisma from "../../lib/prisma";

export default new class EducationRepository { 
   async findAll()  {
    const educations =  prisma.education.findMany({
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
    const education = prisma.education.findUnique({
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

  create(name: string){
    const education = prisma.education.create({
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

  update(id: number, name: string){
    const education = prisma.education.update({
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