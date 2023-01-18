import { Router } from "express";
import * as PostController from "../../models/post";

export const postRouter = Router();

postRouter.post("/posts", async (req, res) => {
  const post = req.body;
  try {
    const newPost = await PostController.createPost(post);
    return res.send(201).json(newPost);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

postRouter.get("/posts", async (req, res) => {
  try {
    const posts = await PostController.listPost();
    return res.status(200).json(posts);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

postRouter.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const specialisById = await PostController.listPostById(Number(id));
      return res.status(200).json(specialisById);
    }
    return res.status(404).json("Post could not be found.");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

postRouter.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const post = req.body;
      const updatePost = await PostController.updatePost(post, Number(id));
      return res.status(201).json(updatePost);
    }
    return res.status(500).json("Post could not be found.");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

postRouter.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await PostController.deletePost(Number(id));
    res.status(204).json("Deleted Successfully!");
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});
