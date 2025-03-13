import AttachmentModal from "@/components/dashboard/AttachmentModal";
import { Button } from "@/components/ui/button";
import { Smile, Copy, Bookmark } from "lucide-react";
import {
  Mic,
  ArrowRight,
  Paperclip,
  ChevronLeft,
  CalendarDays,
  Clock,
  CircleCheck,
  File,
} from "lucide-react";
import { useState } from "react";
import bgimg from "../../../assets/bgimg.png";

export default function Chatscreen3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const documents = [
    "Academic Transcripts",
    "IELTS Score (Minimum 7.0)",
    "Statement of Purpose",
    "Letters of Recommendation (2)",
    "Resume/CV",
    "Passport Copy",
  ];

  const timelineSteps = [
    { step: 1, title: "Document Submission", date: "March 1, 2024" },
    { step: 2, title: "Application Review", date: "March 1, 2024" },
    { step: 3, title: "Interview (if required)", date: "March 1, 2024" },
    { step: 4, title: "Decision", date: "March 1, 2024" },
  ];

  const DocumentList = () => (
    <div>
      <h1>Required Documents</h1>
      <ul>
        {documents.map((document, index) => (
          <li key={index} className="flex gap-1 py-1">
            <File />
            <p>{document}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const TimelineSteps = () => (
    <div className="flex flex-col gap-5">
      {timelineSteps.map((item) => (
        <div key={item.step} className="flex gap-2 items-center">
          <div className="flex justify-center items-center bg-[#FF5241] h-6 w-6 rounded-full text-white">
            {item.step}
          </div>
          <div>
            <h1 className="text-[#1E1F22] text-[16px] font-semibold">
              {item.title}
            </h1>
            <p className="text-[#6D6D6D] text-[14px]">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const ActionButtons = () => (
    <div className="flex w-full gap-4 mt-2">
      <Button className="bg-[#FF5241] text-white flex-1 py-5 text-md font-thin">
        Connect with Expert
      </Button>
      <Button className="bg-[#FF5241] text-white flex-1 py-5 text-md font-thin">
        Apply Now
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col justify-between min-h-screen flex-grow">
      <AttachmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 pb-2 py-10">
          <ChevronLeft />
          back
        </div>
        <div className="relative w-full">
          <img src={bgimg} alt="Background" className="w-full h-auto" />
          <div className="absolute bottom-10 left-5 text-white text-center">
            <h1 className="text-2xl font-bold text-start">
              University of Toronto
            </h1>
            <p className="text-lg text-start">Master of Computer Science</p>
            <div className="flex gap-5 justify-between mt-5">
              <div className="flex gap-2">
                <CalendarDays />
                <p>Fall 2024</p>
              </div>
              <div className="flex gap-2">
                <Clock />
                <p>2 Year</p>
              </div>
              <div className="flex gap-2">
                <CircleCheck />
                <p>85% Acceptance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-[#FFEFED] max-w-7xl rounded mx-auto mt-5">
          <div className="flex justify-between px-10">
            <DocumentList />
            <TimelineSteps />
          </div>
        </div>
      </div>
      <div className="border border-b mx-auto w-[80%] mt-5"></div>
      <div className="max-w-7xl mx-auto w-full px-5">
        <h1 className="text-lg font-semibold mb-3">Need Assistance?</h1>
        <ActionButtons />
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
  );
}
