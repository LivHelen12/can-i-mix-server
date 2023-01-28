import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as PostModel from "./DeletePost.UseCase";

export const deletePostController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await PostModel.deletePost(Number(id));
    res.send();
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
