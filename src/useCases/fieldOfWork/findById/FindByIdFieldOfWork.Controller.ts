import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as FieldOfWorkModel from "./FindByIdFieldOfWork.UseCase";

export const listByFieldIdController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const fieldOfWork = await FieldOfWorkModel.listFieldOfWorkById(Number(id));
    res.json(fieldOfWork);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
