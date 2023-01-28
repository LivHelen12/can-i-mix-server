import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SubstanceModel from "./FindAllSubstance.UseCase.ts";

export const listAllSubstanceController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const substances = await SubstanceModel.listSubstance();
    res.json(substances);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
