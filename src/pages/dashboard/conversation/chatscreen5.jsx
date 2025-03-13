import AttachmentModal from "@/components/dashboard/attachment-modal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bookmark,
  Copy,
  Mic,
  Paperclip,
  Smile,
  Clock4,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export default function Chatscreen5() {
  // const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  return (
    <>
      <div className="flex flex-col min-h-screen flex-grow">
        <AttachmentModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div>
          <div className="flex gap-2 pb-2 max-w-7xl mx-auto py-10">
            <div className="h-10 w-10 rounded bg-black "></div>
            <h1>Response</h1>
            <div>24 Sep ▪ 11:30 PM</div>
          </div>
          <div className="p-5  bg-[#FFEFED] max-w-7xl rounded mx-auto">
            <p className="text-[#2A2A2A] text-[16px] font-normal leading-[164%]">
              To recommend the best pathway, I need some details. What’s your
              reason for migrating.
            </p>
            <ul>
              <li>Study Abroad 🎓</li>
              <li>Work & Employment 💼</li>
              <li> Permanent Residency 🏡</li>
              <li> Other 🔍</li>
            </ul>

            <div className="flex justify-between items-center mt-10">
              <div className="bg-[#FF5241] rounded-xl p-2 flex gap-5">
                <Smile />
                <Smile />
              </div>
              <div className="flex gap-5">
                <div className="bg-[#FF5241] rounded-xl p-2 flex gap-5 text-white">
                  <h1>Generate Response</h1>
                </div>
                <div className="bg-[#FF5241] rounded-xl p-2 flex justify-center items-center gap-2 text-white">
                  <Copy size={15} />
                  <h1>Copy</h1>
                </div>
                <div className="bg-[#FF5241] rounded-xl p-2 flex justify-center items-center text-white">
                  <Bookmark size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end max-w-7xl  py-10 flex-grow">
          <div className="flex justify-end gap-2 pb-2 w-full">
            <h1>You</h1>
            <div>24 Sep ▪ 11:30 PM</div>
            <div className="h-10 w-10 rounded bg-black"></div>
          </div>

          <div className="p-5 bg-[#FFEFED] max-w-xl rounded flex justify-end w-full">
            <p className="text-[#2A2A2A] text-[16px] font-normal leading-[164%]">
              I want to study abroad
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <Button
            className="bg-[#FF5241] text-white"
            onClick={() => setIsDialogOpen(true)}
          >
            Open Modal
          </Button>
        </div>

        <div className="w-full max-w-7xl flex items-center border border-gray-300 bg-[#1E1F22] rounded-full p-2 shadow-md mb-5 mx-auto mt-5">
          <div className="bg-[#424346] h-10 w-10 rounded-full flex justify-center items-center">
            <Paperclip
              className="text-white w-6 h-6 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          <input
            type="text"
            placeholder="Type your prompt here"
            className="flex-1 outline-none text-lg px-3 bg-transparent text-white placeholder-gray-400"
          />
          <Mic className="text-gray-500 w-6 h-6 cursor-pointer mx-3" />
          <button className="bg-red-600 p-3 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <div className="flex gap-5 justify-between">
            <div>
              <div className="h-12 w-12 rounded bg-red-500"></div>
              <h3>EasyMigrate Inc.</h3>
              <h1>Product Demo</h1>
              <div className="flex gap-2 justify-start items-center text-gray-400">
                <Clock4 size={15} /> <span>30 Min</span>
              </div>
              <div className="flex gap-2 justify-start items-center text-gray-400">
                <Phone size={15} /> <span>Phone call</span>
              </div>

              <p className="text-[#1A1A1A] font-montserrat text-[16px] not-italic font-normal leading-[150%]">
                This is an example of a meeting you would have with a potential
                customer to demonstrate your product.
              </p>

              <div className="flex justify-between gap-10 text-xs truncate bottom-2 absolute">
                <p>Cookie settings</p>
                <p>Report abuse</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 border-l-2 p-2">
              <DialogHeader>
                <DialogTitle>Select a Date & Time</DialogTitle>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="border rounded-lg p-4"
              />

              {selectedDate && (
                <p className="text-gray-700">
                  Selected Date: {format(selectedDate, "PPP")}
                </p>
              )}

              <div className="text-start">
                <h1 className="text-start font-bold text-black">Time Zone</h1>
                <select
                  value={selectedTimeZone}
                  onChange={(e) => setSelectedTimeZone(e.target.value)}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select Time Zone</option>
                  <option value="GMT">GMT</option>
                  <option value="EST">Eastern Standard Time (EST)</option>
                  <option value="PST">Pacific Standard Time (PST)</option>
                </select>
                <Button className="rounded-full bg-transparent text-black border mt-2">
                  Troubleshooting
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
