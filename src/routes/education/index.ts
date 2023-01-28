import { Router } from "express";
import { listAllEducationController } from "../../useCases/education/findAll/FindAllEducation.Controller";
import { listByIdEducationController } from "../../useCases/education/findById/FindByIdEducation.Controller";

export const educationRouter = Router();

educationRouter.get("/education", listAllEducationController);
educationRouter.get("/education/:id", listByIdEducationController);
