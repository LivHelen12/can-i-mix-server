import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as EducationModel from "./CreateEducation.UseCase";

export const createEducationController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const education = req.body;
    const newEducation = EducationModel.createEducation(education);
    res.json(newEducation);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
