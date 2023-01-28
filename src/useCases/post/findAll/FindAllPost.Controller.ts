import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as PostModel from "./FindAllPost.UseCase";

export const listAllPostController: RequestHandler = async (req, res, next) => {
  try {
    const posts = await PostModel.listPost();
    res.json(posts);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
    next(error);
  }
};
