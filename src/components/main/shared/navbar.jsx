import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import MobileSidebar from "./mobile-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/auth.hook";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { logout, isPending } = useLogout();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    const avatar = localStorage.getItem("avatar");

    try {
      const parsedUser = userStr ? JSON.parse(userStr) : null;
      console.log({ parsedUser });

      if (token && parsedUser?.email) {
        setUser({
          email: parsedUser.email,
          avatar: avatar || "",
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Invalid user data in localStorage:", error);
      setUser(null);
    }
  }, []);
  //manual logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser(null);
    navigate("/");
  };

  const navItems = [
    { title: "Home", url: "/" },
    { title: "Features", url: "/#" },
    { title: "Pricing", url: "/pricing" },
    { title: "Support", url: "/about" },
  ];

  return (
    <nav className="bg-[#FFFCFC] py-4 h-[90px] flex items-center sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link to="/">
          <h1 className="font-bold text-3xl">EasyMigrate</h1>
        </Link>

        <ul className="hidden lg:flex gap-10 text-black font-montserrat text-base not-italic font-normal leading-normal">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-gray-700 transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.email?.[0]?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{user.email}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 mt-2">
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/update-pass")}>
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => handleLogout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link to="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>

        <div className="lg:hidden">
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
