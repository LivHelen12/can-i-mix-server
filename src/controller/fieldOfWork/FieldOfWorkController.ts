import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FieldOfWorkRepository from "../../repositories/fieldOfWork/FieldOfWorkRepository"

export default new class FieldOfWorkController {
  async index(request: Request, response: Response){
    const fields = await FieldOfWorkRepository.findAll();

    return response.json(fields);
  }

  async show(request: Request, response: Response){
    const { id } = request.params;
    const field = await FieldOfWorkRepository.findById(Number(id));

    if(!field) {
      return response.status(StatusCodes.NOT_FOUND).json({error: "Field of work not found."})
    }

    return response.json(field);
  }

  async store(request: Request, response: Response){
    const { name } = request.body;

    if(!name) {
      return response.status(StatusCodes.BAD_REQUEST).json({ error: 'Name is required' });
    }

    const field = await FieldOfWorkRepository.create(name);

    response.json(field);
  }

  async update(request: Request, response: Response){
    const { id } = request.params;
    const { name } = request.body;

    const fieldExist = await FieldOfWorkRepository.findById(Number(id));

    if(!fieldExist) {
      response.status(StatusCodes.NOT_FOUND).json({ error: 'Field of work not found' });
    }

    if(!name) {
      return response.status(StatusCodes.BAD_REQUEST).json({ error: 'Name is required' });
    }

    const field = await FieldOfWorkRepository.update(Number(id), String(name));

    return response.json(field);
  }

  async delete(request: Request, response: Response){
    const { id } = request.params;

    await FieldOfWorkRepository.delete(Number(id));
    response.sendStatus(StatusCodes.NO_CONTENT);
  }
}
