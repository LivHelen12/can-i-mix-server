import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as RecommendedModel from "./FindAllRecommend.UseCase";

export const listAllRecommendedController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const recommendeds = await RecommendedModel.listRecommended();
    return res.json(recommendeds);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
