import { Router } from "express";
import FieldOfWorkController from "../../controller/fieldOfWork/FieldOfWorkController";

export const fieldOfWorkRouter = Router();

fieldOfWorkRouter.get("/fieldofwork", FieldOfWorkController.index);
fieldOfWorkRouter.get("/fieldofwork/:id", FieldOfWorkController.show);
fieldOfWorkRouter.post("/fieldofwork", FieldOfWorkController.store);
fieldOfWorkRouter.put("/fieldofwork/:id", FieldOfWorkController.update);
fieldOfWorkRouter.delete("/fieldofwork/:id", FieldOfWorkController.delete);

