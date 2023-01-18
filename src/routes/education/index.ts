import { Router } from "express";
import {
  listAllEducation,
  listByIdEducation,
  createEducation,
} from "../../controllers/education";

export const educationRouter = Router();

educationRouter.get("/education", listAllEducation);
educationRouter.get("/education/:id", listByIdEducation);
educationRouter.post("/education", createEducation);
