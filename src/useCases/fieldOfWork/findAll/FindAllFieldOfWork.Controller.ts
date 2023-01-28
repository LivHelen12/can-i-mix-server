import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as FieldOfWorkModel from "./FindAllFieldOfWork.UseCase";

export const listAllFieldsController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const fieldOfWork = await FieldOfWorkModel.listFieldOfWork();
    res.json(fieldOfWork);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
