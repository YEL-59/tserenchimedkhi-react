import DashboardSidebar from '@/components/dashboard/dashboard-sidebar';

import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex-grow h-full overflow-y-auto">
        {/* <NavBar /> */}
        <Outlet />
      </div>
    </div>
  );
}
