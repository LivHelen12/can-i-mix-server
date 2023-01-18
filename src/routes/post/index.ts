import { Router } from "express";
import {
  createPost,
  listAllPost,
  listByIdPost,
  updatePost,
  deletePost,
} from "../../controllers/post";

export const postRouter = Router();

postRouter.post("/post", createPost);
postRouter.get("/post", listAllPost);
postRouter.get("/post/:id", listByIdPost);
postRouter.put("/post/:id", updatePost);
postRouter.delete("/post/:id", deletePost);
