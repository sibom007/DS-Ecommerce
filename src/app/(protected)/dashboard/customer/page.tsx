import { auth } from "@clerk/nextjs/server";
import { fetchQuery } from "convex/nextjs";
import { redirect } from "next/navigation";
import { api } from "../../../../../convex/_generated/api";
import { ROLES } from "@/feature/auth/constant";

const Page = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const role = await fetchQuery(api.auth.getUserRole, { clerkId: userId });
  if (role !== ROLES.CUSTOMER) redirect(`/dashboard/${role}`);

  return (
    <div>
      <h1>Customer</h1>
    </div>
  );
};

export default Page;
