import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellRing } from "lucide-react";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="text-black text-lg font-semibold">Welcome back</h1>
          <h1 className="text-black text-xl font-bold">Md. Tofayel Islam</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-[#ffeeec] flex justify-center items-center text-black font-bold">
            <BellRing />
          </div>

          {/* User Profile Dropdown */}
          <div>
            <Select>
              <SelectTrigger className="w-[220px] border rounded-full px-3 p-6 flex items-center space-x-2">
                {/* Avatar */}
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* User Details */}
                <div className="text-left">
                  <p className="text-sm font-semibold">Md. Tofayel Islam</p>
                  <p className="text-xs text-gray-500">tofayel@email.com</p>
                </div>
              </SelectTrigger>

              <SelectContent>
                <SelectItem
                  value="logout"
                  className="text-red-500 font-semibold"
                >
                  Logout
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
