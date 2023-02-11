import { Router } from "express";
import { createFieldOfWorkController } from "../../useCases/fieldOfWork/create/CreateFieldOfWork.Controller";
import { listAllFieldsController } from "../../useCases/fieldOfWork/findAll/FindAllFieldOfWork.Controller";
import { listByFieldIdController } from "../../useCases/fieldOfWork/findById/FindByIdFieldOfWork.Controller";

export const fieldOfWorkRouter = Router();

fieldOfWorkRouter.post("/fieldofwork", createFieldOfWorkController);
fieldOfWorkRouter.get("/fieldofwork", listAllFieldsController);
fieldOfWorkRouter.get("/fieldofwork/:id", listByFieldIdController);
