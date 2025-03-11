import Sidebar from '@/components/dashboard/chat-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

export default function ChatLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
