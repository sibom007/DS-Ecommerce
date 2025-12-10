// lib/sidebar-items.ts
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

export const sidebarItems = {
  admin: [
    { title: "Home", url: "/home", icon: Home },
    { title: "Inbox", url: "/inbox", icon: Inbox },
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
