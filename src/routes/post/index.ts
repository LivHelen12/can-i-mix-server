import { Router } from "express";
import { createPostController } from "../../useCases/post/create/CreatePost.Controller";
import { deletePostController } from "../../useCases/post/delete/DeletePost.Controller";
import { listAllPostController } from "../../useCases/post/findAll/FindAllPost.Controller";
import { listByIdPostController } from "../../useCases/post/findById/FindByIdPost.Controller";
import { updatePostController } from "../../useCases/post/update/UpdatePost.Controller";

export const postRouter = Router();

postRouter.post("/post", createPostController);
postRouter.get("/post", listAllPostController);
postRouter.get("/post/:id", listByIdPostController);
postRouter.put("/post/:id", updatePostController);
postRouter.delete("/post/:id", deletePostController);
