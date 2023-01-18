import { Router } from "express";
import {
  listAllSpecialist,
  listByIdSpecialist,
  createSpecialist,
  updateSpecialist,
  deleteSpecialist,
} from "../../controllers/specialist";

export const specialistRouter = Router();

specialistRouter.post("/specialists", createSpecialist);
specialistRouter.get("/specialists", listAllSpecialist);
specialistRouter.get("/specialists/:id", listByIdSpecialist);
specialistRouter.put("/specialists/:id", updateSpecialist);
specialistRouter.delete("/specialists/:id", deleteSpecialist);
