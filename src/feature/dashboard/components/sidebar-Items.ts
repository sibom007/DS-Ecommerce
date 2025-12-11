// lib/sidebar-items.ts
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  SquaresUniteIcon,
  LayoutDashboardIcon,
} from "lucide-react";

export const sidebarItems = {
  admin: [
    { title: "Overview", url: "/dashboard/admin", icon: LayoutDashboardIcon },
    {
      title: "Products",
      url: "/dashboard/admin/products",
      icon: SquaresUniteIcon,
    },
    { title: "Calendar", url: "/calendar", icon: Calendar },
    { title: "Settings", url: "/settings", icon: Settings },
  ],
  manager: [
    { title: "Home", url: "/home", icon: Home },
    { title: "Inbox", url: "/inbox", icon: Inbox },
    { title: "Search", url: "/search", icon: Search },
  ],

  customer: [
    { title: "Home", url: "/home", icon: Home },
    { title: "Search", url: "/search", icon: Search },
  ],
};
