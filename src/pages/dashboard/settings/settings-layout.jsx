import { Outlet } from 'react-router';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

export default function SettingsLayout() {
  return (
    <div className="flex h-[calc(100svh-98px)] w-full overflow-y-hidden px-6 @container">
      <Sidebar />
      <div className="px-[45px] max-h-[calc(100svh-98px)] w-full overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
