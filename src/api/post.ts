import { Specialist, Substance } from "@prisma/client";
import { Id } from "./id"
import { Recommended } from "./recommended";

export type Post = Partial<{
  id: Id;
  substanceId: Id;
  substance: Substance[];
  recommendedId: Id;
  recommended: Recommended;
  specialistId: Id;
  specialist: Specialist;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}>