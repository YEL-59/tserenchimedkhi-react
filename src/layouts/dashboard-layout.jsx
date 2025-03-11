import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <div className="flex">
      <aside className="w-[40px] h-screen border"></aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
