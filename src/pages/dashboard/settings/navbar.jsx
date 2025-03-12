import { cn } from "@/lib/utils";
import { Home, Inbox } from "lucide-react";

import { Link, useLocation } from "react-router";

// Menu items.
const items = [
  {
    title: "General",
    url: "/settings",
    icon: Home,
  },
  {
    title: "Change Password",
    url: "/settings/change-password",
    icon: Inbox,
  },
];

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-center items-center @4xl:hidden mb-8">
      {items.map((item) => (
        <Link
          to={item.url}
          key={item.url}
          className={cn(
            "p-4 w-[200px] text-center block rounded-full text-xs @md:text-sm @lg:text-base",
            {
              "bg-foreground/5": pathname === item.url,
            }
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
