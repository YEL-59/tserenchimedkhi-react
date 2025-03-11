import {
  Sidebar as ShadCNSidebar,
  SidebarContent,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router';
import { uid } from 'uid';

export default function Sidebar() {
  const chats = [
    {
      id: uid(),
      title: 'Hello There',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Nice Job',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'See you',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Nice Job',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'See you',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello There',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Nice Job',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Nice Job',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'See you',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Nice Job',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'See you',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello There',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Nice Job',
      message: 'This is a message',
    },
  ];

  const saved = [
    {
      id: uid(),
      title: 'Hello There',
      message: 'This is a message',
    },
    {
      id: uid(),
      title: 'Hello',
      message: 'This is a message',
    },
  ];

  return (
    <ShadCNSidebar className="ml-[40px]">
      <Tabs defaultValue="chats" className="w-full">
        <SidebarHeader>
          {/* Top */}
          <div className="flex justify-between">
            <h2>My Chats</h2>
            <div>
              {/* Button 1 */}
              {/* Button 2 */}
            </div>
          </div>
          {/* Tabs */}
          <TabsList>
            <TabsTrigger value="chats">Chats</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
        </SidebarHeader>
        <SidebarContent>
          <TabsContent
            value="chats"
            className="space-y-2 overflow-y-auto h-screen"
          >
            {chats.map((chat) => (
              <Link
                to={`/dashboard/chat/${chat.id}`}
                key={chat.id}
                className="p-4"
              >
                <h3 className="font-bold">{chat.title}</h3>
                <p>{chat.message}</p>
              </Link>
            ))}
          </TabsContent>
          <TabsContent
            value="saved"
            className="space-y-2 overflow-y-auto h-screen"
          >
            {saved.map((chat) => (
              <Link
                to={`/dashboard/chat/${chat.id}`}
                key={chat.id}
                className="p-4"
              >
                <h3 className="font-bold">{chat.title}</h3>
                <p>{chat.message}</p>
              </Link>
            ))}
          </TabsContent>
        </SidebarContent>
      </Tabs>
    </ShadCNSidebar>
  );
}
