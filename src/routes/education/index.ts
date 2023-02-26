import { Router } from "express";
import EducationController from "../../controller/education/EducationController";


export const educationRouter = Router();

educationRouter.get("/education", EducationController.index);
educationRouter.get("/education/:id", EducationController.show);
educationRouter.post("/education", EducationController.store);
educationRouter.put("/education/:id", EducationController.update);
educationRouter.delete("/education/:id", EducationController.delete);
