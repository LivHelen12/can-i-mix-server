import { Router } from "express";
import {
  listAllFieldsController,
  listByFieldIdController,
} from "../../controllers/fieldOfWork";

export const fieldOfWorkRouter = Router();

fieldOfWorkRouter.get("/fieldofwork", listAllFieldsController);
fieldOfWorkRouter.get("/fieldofwork/:id", listByFieldIdController);
