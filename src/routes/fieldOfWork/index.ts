import { Router } from "express";
import { listAllFieldsController } from "../../useCases/fieldOfWork/findAll/FindAllFieldOfWork.Controller";
import { listByFieldIdController } from "../../useCases/fieldOfWork/findById/FindByIdFieldOfWork.Controller";

export const fieldOfWorkRouter = Router();

fieldOfWorkRouter.get("/fieldofwork", listAllFieldsController);
fieldOfWorkRouter.get("/fieldofwork/:id", listByFieldIdController);
