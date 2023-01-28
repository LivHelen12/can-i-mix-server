import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SpecialistModel from "./CreateSpecialist.UseCase";

export const createSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const specialist = req.body;
    const newSpecialist = SpecialistModel.createSpecialist(specialist);
    res.json(newSpecialist);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
