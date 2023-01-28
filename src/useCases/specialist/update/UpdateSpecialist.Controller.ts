import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as SpecialistModel from "./UpdateSpecialist.UseCase";

export const updateSpecialistController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const specialist = req.body;
    const updateSpecialist = await SpecialistModel.updateSpecialist(
      specialist,
      Number(id)
    );
    res.json(updateSpecialist);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
