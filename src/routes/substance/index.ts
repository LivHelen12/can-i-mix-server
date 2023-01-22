import { Router } from "express";
import {
  createSubstanceController,
  listAllSubstanceController,
  listByIdSubstanceController,
} from "../../controllers/substance";

export const substanceRouter = Router();

substanceRouter.get("/substance", listAllSubstanceController);
substanceRouter.get("/substance/:id", listByIdSubstanceController);
substanceRouter.post("/substance", createSubstanceController);
