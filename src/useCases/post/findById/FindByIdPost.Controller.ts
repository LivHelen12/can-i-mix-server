import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as PostModel from "./FindByIdPost.UseCase";

export const listByIdPostController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { id } = req.params;
    const post = await PostModel.listPostById(Number(id));
    res.json(post);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
