import express from "express";
import { educationRouter } from "./routes/education";
import { fieldOfWorkRouter } from "./routes/fieldOfWork";
import { postRouter } from "./routes/post";
import { recommendedRouter } from "./routes/recommended";
import { specialistRouter } from "./routes/specialist";
import { substanceRouter } from "./routes/substance";

export const routes = express();

routes.use(specialistRouter);
routes.use(fieldOfWorkRouter);
routes.use(educationRouter);
routes.use(recommendedRouter);
routes.use(substanceRouter);
routes.use(postRouter);
