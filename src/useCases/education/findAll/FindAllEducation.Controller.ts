import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as EducationModel from "./FindAllEducation.UseCase";

export const listAllEducationController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const educations = await EducationModel.listEducation();
    res.json(educations);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
