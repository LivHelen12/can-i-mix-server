import { Router } from "express";
import { listAllRecommendedController } from "../../useCases/recommended/findAll/FindAllRecommend.Controller";

export const recommendedRouter = Router();

recommendedRouter.get("/recommended", listAllRecommendedController);
