import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as EducationModel from "./FindByIdEducation.UseCase";

export const listByIdEducationController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const education = await EducationModel.listEducationById(Number(id));
    res.json(education);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
