import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SpecialistModel from "./FindAllSpecialist.UseCase";

export const listAllSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const specialists = await SpecialistModel.listSpecialist();
    res.json(specialists);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
