import { Router } from "express";
import { createSpecialistController } from "../../useCases/specialist/create/CreateSpecialist.Controller";
import { deleteSpecialistController } from "../../useCases/specialist/delete/DeleteSpecialist.Controller";
import { listAllSpecialistController } from "../../useCases/specialist/findAll/FindAllSpecialist.Controller";
import { listByIdSpecialistController } from "../../useCases/specialist/findById/FindByIdSpecialist.Controller";
import { updateSpecialistController } from "../../useCases/specialist/update/UpdateSpecialist.Controller";

export const specialistRouter = Router();

specialistRouter.post("/specialists", createSpecialistController);
specialistRouter.get("/specialists", listAllSpecialistController);
specialistRouter.get("/specialists/:id", listByIdSpecialistController);
specialistRouter.put("/specialists/:id", updateSpecialistController);
specialistRouter.delete("/specialists/:id", deleteSpecialistController);
