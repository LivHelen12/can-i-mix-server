import { Router } from "express";
import { listAllRecommended } from "../../controllers/recommended";

export const recommendedRouter = Router();

recommendedRouter.get("/recommended", listAllRecommended);
