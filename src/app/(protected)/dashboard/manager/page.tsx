import { ROLES } from "@/feature/auth/constant";
import { requireRole } from "@/feature/auth/lib/requireRole";

const Page = async () => {
  await requireRole(ROLES.MANAGER);

  return (
    <div>
      <h1>Manager</h1>
    </div>
  );
};

export default Page;
