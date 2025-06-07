import ChatLayout from "@/layouts/chat-layout";
import DashboardLayout from "@/layouts/dashboard-layout";
import MainLayout from "@/layouts/main-layout";
import ResetPassword from "@/pages/auth/resetpassword";
import Sendotp from "@/pages/auth/sendotp";
import Signin from "@/pages/auth/signin";
import Signup from "@/pages/auth/signup";
import UpdatePassword from "@/pages/auth/updatepassword";
import VerifyOtp from "@/pages/auth/verifyotp";
import Chat from "@/pages/dashboard/chat/chat";
import ChatScreen1 from "@/pages/dashboard/conversation/chatscreen1";
import ChatScreen2 from "@/pages/dashboard/conversation/chatscreen2";
import Chatscreen5 from "@/pages/dashboard/conversation/chatscreen5";
import CompareUniversities from "@/pages/dashboard/conversation/compare-universities";
import UniversityDetails from "@/pages/dashboard/conversation/university-details";
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
            path: "chat-1",
            element: <ChatScreen1 />,
          },
          {
            path: "chat-2",
            element: <ChatScreen2 />,
          },
          {
            path: "university-details",
            element: <UniversityDetails />,
          },
          {
            path: "compare-universities",
            element: <CompareUniversities />,
          },
          {
            path: "connect-expert",
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
  {
    path: "otp-send",
    element: <Sendotp />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "new-password",
    element: <ResetPassword />,
  },
  {
    path: "update-pass",
    element: <UpdatePassword />,
  },
]);
