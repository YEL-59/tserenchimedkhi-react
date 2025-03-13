import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import NavBar from "@/components/dashboard/NavBar";

import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <aside>
        {" "}
        <DashboardSidebar />
      </aside>
      <div className="flex-1 ">
        <div>
          <NavBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
