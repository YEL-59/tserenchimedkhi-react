import ChatLayout from "@/layouts/chat-layout";
import DashboardLayout from "@/layouts/dashboard-layout";
import MainLayout from "@/layouts/main-layout";
import Signin from "@/pages/auth/signin";
import Signup from "@/pages/auth/signup";
import Chat from "@/pages/dashboard/chat";
import Conversation from "@/pages/dashboard/conversation";
import Chatscreen1 from "@/pages/dashboard/conversation/chatscreen1";
import Chatscreen2 from "@/pages/dashboard/conversation/chatscreen2";
import Chatscreen3 from "@/pages/dashboard/conversation/chatscreen3";
import Chatscreen4 from "@/pages/dashboard/conversation/chatscreen4";
import ChangePassword from "@/pages/dashboard/settings/change-password";
import GeneralSettings from "@/pages/dashboard/settings/general-settings";
import SettingsLayout from "@/pages/dashboard/settings/settings-layout";
import About from "@/pages/main/about/about";
import Home from "@/pages/main/home/home";
import Pricing from "@/pages/main/pricing/pricing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/dashboard",
    exact: true,
    element: <DashboardLayout />,
    children: [
      {
        path: "chat",
        element: <ChatLayout />,
        children: [
          {
            index: true,
            element: <Chat />,
          },
          {
            path: ":id",
            element: <Conversation />,
          },
          {
            path: "screen1",
            element: <Chatscreen1 />,
          },
          {
            path: "screen2",
            element: <Chatscreen2 />,
          },
          {
            path: "screen3",
            element: <Chatscreen3 />,
          },
          {
            path: "screen4",
            element: <Chatscreen4 />,
          },
          {
            path: "screen5",
            element: <Chatscreen5 />,
          },
        ],
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <GeneralSettings />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact Page</h1>,
  },

  {
    path: "sign-in",
    element: <Signin />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
]);
