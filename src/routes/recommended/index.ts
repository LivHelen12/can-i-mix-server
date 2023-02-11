import { Router } from "express";
import { createRecommendedController } from "../../useCases/recommended/create/CreateRecommended.Controller";
import { listAllRecommendedController } from "../../useCases/recommended/findAll/FindAllRecommend.Controller";

export const recommendedRouter = Router();

recommendedRouter.post("/recommended", createRecommendedController);
recommendedRouter.get("/recommended", listAllRecommendedController);
