import { ROLES } from "@/feature/auth/constant";
import { requireRole } from "@/feature/auth/lib/requireRole";

const Page = async () => {
  await requireRole(ROLES.ADMIN);

  return (
    <div>
      <h1>Admin Dahboard</h1>
    </div>
  );
};

export default Page;
