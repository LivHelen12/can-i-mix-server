import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SubstanceModel from "./FindById.UseCase.ts";

export const listByIdSubstanceController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const substance = await SubstanceModel.listSubstanceById(Number(id));
    res.json(substance);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
