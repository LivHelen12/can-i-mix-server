import { Router } from "express";
import {
  listAll,
  listById,
  create,
  update,
  remove,
} from "../../middlewares/education";

export const educationRouter = Router();

educationRouter.get("/education", listAll);
educationRouter.get("/education/:id", listById);
educationRouter.post("/education", create);
educationRouter.put("/education/:id", update);
educationRouter.delete("/education/:id", remove);
