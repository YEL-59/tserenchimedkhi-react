import Sidebar from '@/components/dashboard/chat-sidebar';
import { Outlet } from 'react-router';

export default function ChatLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:block"><Sidebar/></div>
      <main className="flex-1 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
