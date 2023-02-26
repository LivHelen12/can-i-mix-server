import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EducationRepository from "../../repositories/education/EducationRepository";

export default new class EducationController {
  async index(request: Request, response: Response) {
    const educations = await EducationRepository.findAll();
    return response.json(educations);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const education = await EducationRepository.findById(Number(id));

    if(!education) {
      return response.status(StatusCodes.NOT_FOUND).json({error: "Education not found."})
    }

    return response.json(education);
  }

  async store(request: Request, response: Response) {
    const { name } = request.body;

    if(!name) {
      return response.status(StatusCodes.BAD_REQUEST).json({ error: 'Name is required' });
    }

    const education = await EducationRepository.create(name);

    response.json(education);
  }

  async update(request: Request, response: Response){
    const { id } = request.params;
    const { name } = request.body;

    const educationExist = await EducationRepository.findById(Number(id));

    if(!educationExist) {
      response.status(StatusCodes.NOT_FOUND).json({ error: 'Education not found' });
    }

    if(!name) {
      return response.status(StatusCodes.BAD_REQUEST).json({ error: 'Name is required' });
    }

    const education = await EducationRepository.update(Number(id), String(name));

    return response.json(education);
  }

  async delete(request: Request, response: Response){
    const { id } = request.params;

    await EducationRepository.delete(Number(id));
    response.sendStatus(StatusCodes.NO_CONTENT);
  }
}
