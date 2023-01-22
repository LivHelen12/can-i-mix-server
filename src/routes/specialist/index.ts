import { Router } from "express";
import {
  listAllSpecialistController,
  listByIdSpecialistController,
  createSpecialistController,
  updateSpecialistController,
  deleteSpecialistController,
} from "../../controllers/specialist";

export const specialistRouter = Router();

specialistRouter.post("/specialists", createSpecialistController);
specialistRouter.get("/specialists", listAllSpecialistController);
specialistRouter.get("/specialists/:id", listByIdSpecialistController);
specialistRouter.put("/specialists/:id", updateSpecialistController);
specialistRouter.delete("/specialists/:id", deleteSpecialistController);
