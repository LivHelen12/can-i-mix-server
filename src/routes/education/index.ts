import { Router } from "express";
import { createEducationController } from "../../useCases/education/create/CreateEducation.Controller";
import { listAllEducationController } from "../../useCases/education/findAll/FindAllEducation.Controller";
import { listByIdEducationController } from "../../useCases/education/findById/FindByIdEducation.Controller";

export const educationRouter = Router();

educationRouter.post("/education", createEducationController);
educationRouter.get("/education", listAllEducationController);
educationRouter.get("/education/:id", listByIdEducationController);
