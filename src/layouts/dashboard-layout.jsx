import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

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
          <h1>Navbar!</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
