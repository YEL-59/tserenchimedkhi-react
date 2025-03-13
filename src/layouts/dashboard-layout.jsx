import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import Navbar from "@/components/dashboard/NavBar";

import { Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex-grow h-full overflow-y-auto">
        {!pathname.startsWith("/dashboard/chat") && <Navbar />}
        <Outlet />
      </div>
    </div>
  );
}
