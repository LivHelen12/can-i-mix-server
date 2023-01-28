import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SubstanceModel from "./CreateSubstance.UseCase";

export const createSubstanceController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const substance = req.body;
    const newSubstance = SubstanceModel.createSubstance(substance);
    res.json(newSubstance);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
