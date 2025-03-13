import AttachmentModal from '@/components/dashboard/attachment-modal';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bookmark,
  Copy,
  Mic,
  Paperclip,
  Smile,
} from 'lucide-react';
import { useState } from 'react';
export default function ChatScreen1() {
  // const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <div>
          <div className="flex gap-2 pb-2 max-w-7xl mx-auto ">
            <div className="h-10 w-10 rounded bg-black "></div>
            <h1>Response</h1>
            <div>24 Sep ▪ 11:30 PM</div>
          </div>
          <div className="p-5  bg-[#FFEFED] max-w-7xl rounded mx-auto">
            <p className="text-[#2A2A2A] text-[16px] font-normal leading-[164%]">
              Great choice! Please provide the necessary information and
              documents for analysis, and I will suggest a university that fits
              your profile and preferences.
            </p>

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
        <div className="p-5  bg-[#FFEFED] max-w-7xl w-full rounded mx-auto">
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded bg-black"></div>
            <div>
              <h1>Detail Pathway Guide</h1>
              <p className="font-thin text-xs">24 Mb Pdf</p>
            </div>
          </div>

          <p className="text-[#2A2A2A] text-[16px] font-normal leading-[164%]">
            Comprehensive guide with step-by-step instructions
          </p>
          <Button className="px-20 bg-transparent border border-dashed text-[#FF5241] border-[#FF5241] mt-5">
            View More
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
    </>
  );
}
