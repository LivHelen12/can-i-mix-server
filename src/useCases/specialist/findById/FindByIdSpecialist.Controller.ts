import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SpecialistModel from "./FindByIdSpecialist.UseCase";

export const listByIdSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const specialist = await SpecialistModel.listSpecialistById(Number(id));
    res.json(specialist);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
