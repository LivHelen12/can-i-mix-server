import { Router } from "express";
import { createSubstanceController } from "../../useCases/substance/create/CresteSubstante.Controller";
import { listAllSubstanceController } from "../../useCases/substance/findAll/FindAllSubstance.Controller";
import { listByIdSubstanceController } from "../../useCases/substance/findById/FindById.Controller";

export const substanceRouter = Router();

substanceRouter.get("/substance", listAllSubstanceController);
substanceRouter.get("/substance/:id", listByIdSubstanceController);
substanceRouter.post("/substance", createSubstanceController);
