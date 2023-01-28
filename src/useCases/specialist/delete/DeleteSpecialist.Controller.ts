import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SpecialistModel from "./DeleteSpecialist.UseCase";

export const deleteSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    await SpecialistModel.deleteSpecialist(Number(id));
    res.send();
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
