import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as PostModel from "./UpdatePost.UseCase";

export const updatePostController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const updatePost = await PostModel.updatePost(post, Number(id));
    res.json(updatePost);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
