import { auth } from "@clerk/nextjs/server";
import { api } from "../../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { redirect } from "next/navigation";
import { ROLES } from "@/feature/auth/constant";

const Page = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const role = await fetchQuery(api.auth.getUserRole, { clerkId: userId });
  if (role !== ROLES.ADMIN) redirect(`/dashboard/${role}`);

  return (
    <div>
      <h1>admin</h1>
    </div>
  );
};

export default Page;
