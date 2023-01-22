import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SubstanceModel from "../../services/substance";

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
