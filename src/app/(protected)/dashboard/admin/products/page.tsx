import { SectionHeader } from "@/components/section-header";
import { ROLES } from "@/feature/auth/constant";
import { requireRole } from "@/feature/auth/lib/requireRole";
import ProductsList from "@/feature/dashboard/admin/products/products-list";

const Page = async () => {
  await requireRole(ROLES.ADMIN);
  return (
    <>
      <SectionHeader
        title="Products"
        description="Manage and track all products in your catalog, including pricing, stock levels, and detailed item information"
      />
      <ProductsList />
    </>
  );
};

export default Page;
