import { Project } from "../project/Project";
import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  estimate: string | null;
  id: string;
  project?: Project | null;
  test: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
