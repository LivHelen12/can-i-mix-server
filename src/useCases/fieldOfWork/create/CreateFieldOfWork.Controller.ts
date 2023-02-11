import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as FieldOfWork from "./CreateFieldOfWork.UseCase";

export const createFieldOfWorkController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const fieldOfWork = req.body;
    const newFieldOfWork = FieldOfWork.createFieldOfWork(fieldOfWork);
    res.json(newFieldOfWork);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
