import { cn } from "@/lib/utils";
import { Home, Inbox } from "lucide-react";

import { Link, useLocation } from "react-router";

// Menu items.
const items = [
  {
    title: "General",
    url: "/dashboard/settings",
    icon: Home,
  },
  {
    title: "Change Password",
    url: "/dashboard/settings/change-password",
    icon: Inbox,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="w-[320px] h-[calc(100svh-98px)] pr-[35px] border-r space-y-4 hidden @4xl:block">
      {items.map((item) => (
        <Link
          to={item.url}
          key={item.url}
          className={cn("p-4 w-full block rounded-full", {
            "bg-foreground/5": pathname === item.url,
          })}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
