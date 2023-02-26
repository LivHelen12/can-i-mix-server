import { Id } from "./id"

export type FieldOfWork = Partial<{
  id: Id;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}>