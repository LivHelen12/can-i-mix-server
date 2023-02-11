import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as Recommended from "./CreateRecommended.UseCase";

export const createRecommendedController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const fieldOfWork = req.body;
    const newRecommended = Recommended.createRecommended(fieldOfWork);
    res.json(newRecommended);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
