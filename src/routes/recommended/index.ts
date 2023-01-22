import { Router } from "express";

import { listAllRecommendedController } from "../../controllers/recommended";

export const recommendedRouter = Router();

recommendedRouter.get("/recommended", listAllRecommendedController);
