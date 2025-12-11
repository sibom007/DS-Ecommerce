import { ROLES } from "@/feature/auth/constant";
import { requireRole } from "@/feature/auth/lib/requireRole";

const Page = async () => {
  await requireRole(ROLES.CUSTOMER);

  return (
    <div>
      <h1>Customer</h1>
    </div>
  );
};

export default Page;
