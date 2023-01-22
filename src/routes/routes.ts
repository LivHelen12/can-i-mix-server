import express from "express";

import { specialistRouter } from "./specialist";
import { fieldOfWorkRouter } from "./fieldOfWork";
import { educationRouter } from "./education";
import { recommendedRouter } from "./recommended";
import { substanceRouter } from "./substance";
import { postRouter } from "./post";

export const routes = express();

routes.use(specialistRouter);
routes.use(fieldOfWorkRouter);
routes.use(educationRouter);
routes.use(recommendedRouter);
routes.use(substanceRouter);
routes.use(postRouter);
