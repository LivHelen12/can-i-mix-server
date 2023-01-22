import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

import * as RecommendedModel from "../../services/recommended";

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

export const listByIdRecommendedController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const recommended = await RecommendedModel.listRecommendedById(Number(id));
    res.json(recommended);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
