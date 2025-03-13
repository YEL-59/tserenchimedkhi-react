import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import Chat from "@/assets/chat";
import Icon1 from "@/assets/icon1";
import Icon2 from "@/assets/Icon2";
import Logout from "@/assets/logout";
import Setting from "@/assets/setting";
import logo from "../../../assets/Logo.png";
import Sidebar from '@/components/dashboard/chat-sidebar';

const DashboardSidebar = () => {
  const [showChatSidebar, setShowChatSidebar] = useState(false);
  const showChatSidebarRef = useRef(null);

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showChatSidebarRef.current &&
        !showChatSidebarRef.current.contains(event.target)
      ) {
        setShowChatSidebar(false); // Close the sidebar
      }
    };

    // Add event listener when the sidebar is open
    if (showChatSidebar) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showChatSidebar]);

  return (
    <>
      <aside className="w-[64px] h-full bg-[#1E1F22]">
        <div className="flex flex-col gap-5 h-screen justify-between items-center py-5">
          <div>
            <div className="flex flex-col gap-20 justify-between items-center">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <Link
                    to="/dashboard/chat"
                    onClick={() => setShowChatSidebar(!showChatSidebar)}
                    className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600"
                  >
                    <Chat />
                  </Link>
                  {
                    showChatSidebar && (
                      <div
                        ref={showChatSidebarRef}
                        className={`fixed top-0 left-[64px] h-full transition-all duration-500 ease-in-out block lg:hidden ${showChatSidebar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                          }`}
                      >
                        <Sidebar />
                      </div>
                    )
                  }
                  <Link
                    to="/dashboard/settings"
                    className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600"
                  >
                    <Setting />
                  </Link>
                  <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                    <Icon1 />
                  </div>
                  <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                    <Icon2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-5 justify-between">
              <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                <Logout />
              </div>
              <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
