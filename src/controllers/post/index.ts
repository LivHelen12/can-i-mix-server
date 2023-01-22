import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as PostModel from "../../services/post";

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
