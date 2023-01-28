import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as PostModel from "./CreatePost.UseCase";

export const createPostController: RequestHandler = async (req, res, next) => {
  try {
    const post = req.body;
    const newPost = PostModel.createPost(post);
    res.json(newPost);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
