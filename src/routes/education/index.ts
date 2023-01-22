import { Router } from "express";
import {
  listAllEducationController,
  listByIdEducationController,
} from "../../controllers/education";

export const educationRouter = Router();

educationRouter.get("/education", listAllEducationController);
educationRouter.get("/education/:id", listByIdEducationController);
