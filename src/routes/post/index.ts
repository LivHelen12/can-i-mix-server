import { Router } from "express";
import {
  createPostController,
  listAllPostController,
  listByIdPostController,
  updatePostController,
  deletePostController,
} from "../../controllers/post";

export const postRouter = Router();

postRouter.post("/post", createPostController);
postRouter.get("/post", listAllPostController);
postRouter.get("/post/:id", listByIdPostController);
postRouter.put("/post/:id", updatePostController);
postRouter.delete("/post/:id", deletePostController);
