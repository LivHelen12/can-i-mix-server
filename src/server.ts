import express from "express";
import cors from "cors";

import { specialistRouter } from "./routes/specialist/specialist";
import { fieldOfWorkRouter } from "./routes/fieldOfWork";
import { educationRouter } from "./routes/education";
import { recommendedRouter } from "./routes/recommended";
import { substanceRouter } from "./routes/substance";
import { postRouter } from "./routes/post";

const app = express();
const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

app.use(cors());
app.use(express.json());

app.use(specialistRouter);
app.use(fieldOfWorkRouter);
app.use(educationRouter);
app.use(recommendedRouter);
app.use(substanceRouter);
app.use(postRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
