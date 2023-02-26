import { Education } from "./education";
import { FieldOfWork } from "./fieldOfWork";
import { Id } from "./id";
import { Post } from "./post";

export type Specialist = Partial<{
  id: Id;
  name: string;
  email: string;
  password: string;
  cpf: string;
  mobile: string;
  fieldOfWorkId: Id;
  fieldOfWork: FieldOfWork;
  educationId: Id;
  education: Education;
  postId: Id;
  post: Post;
  profession: string;
  createdAt: Date;
  updatedAt: Date;
}>;