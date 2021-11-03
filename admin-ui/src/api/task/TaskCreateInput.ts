import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  estimate?: string | null;
  project?: ProjectWhereUniqueInput | null;
  test?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
