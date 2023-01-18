import { Router } from "express";
import {
  createFields,
  listAllFields,
  listByIdFields,
} from "../../controllers/fieldOfWork";

export const fieldOfWorkRouter = Router();

fieldOfWorkRouter.get("/fieldofwork", listAllFields);
fieldOfWorkRouter.get("/fieldofwork/:id", listByIdFields);
fieldOfWorkRouter.post("/fieldofwork", createFields);
