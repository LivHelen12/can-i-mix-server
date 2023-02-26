import prisma from "../../lib/prisma";

export default new class FieldOfWorkRepository {
  async findAll(){
    const fields = await prisma.fieldOfWork.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return fields;
  }

  async findById(id: number){
    const field = await prisma.fieldOfWork.findUnique({
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

    return field;
  }

  async create(name: string){
    const field = await prisma.fieldOfWork.create({
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

    return field;
  }

  async update(id: number, name: string){
    const field = await prisma.fieldOfWork.update({
      data: {
        name,
      },
      where: {
        id,
      }
    });

    return field;
  }

  async delete(id: number){
    await prisma.fieldOfWork.delete({
      where: {
        id,
      }
    });
  }
}
