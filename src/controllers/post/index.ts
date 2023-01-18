import { RequestHandler } from "express";
import * as PostModel from "../../models/post";

export const listAllPost: RequestHandler = async (req, res) => {
  try {
    const posts = await PostModel.listPost();
    return res.status(200).json(posts);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const listByIdPost: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const post = await PostModel.listPostById(Number(id));
      return res.status(200).json(post);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createPost: RequestHandler = async (req, res) => {
  const post = req.body;
  try {
    if (post) {
      const newPost = PostModel.createPost(post);
      return res.status(201).json(newPost);
    } else {
      return res
        .status(400)
        .json({ error: "Missing post object in request body" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updatePost: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  try {
    if (id) {
      const updatePost = await PostModel.updatePost(post, Number(id));
      return res.status(200).json(updatePost);
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deletePost: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await PostModel.deletePost(Number(id));
      return res.status(200).send();
    } else {
      return res.status(400).json({ error: "Missing id in request params" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
