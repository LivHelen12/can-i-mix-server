import { Id } from "./id"

export type Recommended = Partial<{
  id: Id;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}>