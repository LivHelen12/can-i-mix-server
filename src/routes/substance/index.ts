import { Router } from "express";
import {
  createSubstance,
  deleteSubstance,
  listAllSubstance,
  listByIdSubstance,
} from "../../controllers/substance";

export const substanceRouter = Router();

substanceRouter.get("/substance", listAllSubstance);
substanceRouter.get("/substance/:id", listByIdSubstance);
substanceRouter.post("/substance", createSubstance);
