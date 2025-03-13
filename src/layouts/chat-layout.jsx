import Sidebar from '@/components/dashboard/chat-sidebar';
import { Outlet } from 'react-router';

export default function ChatLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 border">
        <Outlet />
      </main>
    </div>
  );
}
