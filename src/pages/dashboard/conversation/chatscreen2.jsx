import AttachmentModal from "@/components/dashboard/AttachmentModal";
import { Button } from "@/components/ui/button";
import { Smile, Copy, Bookmark } from "lucide-react";
import { Mic, ArrowRight, Paperclip } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon5 from "@/assets/icon5";
import Icon6 from "@/assets/icon6";
import Icon7 from "@/assets/icon7";
import Icon8 from "@/assets/icon8";

export default function Chatscreen2() {
  // const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardData = [
    {
      id: 1,
      university: "University of Melbourne",
      program: "Master of Data Science",
      features: [
        { icon: <Icon5 />, text: "Student Visa (Subclass 500)" },
        { icon: <Icon6 />, text: "Full-time study option" },
        { icon: <Icon7 />, text: "Scholarships available" },
        { icon: <Icon8 />, text: "Internship opportunities" },
      ],
    },
    {
      id: 2,
      university: "Harvard University",
      program: "MBA Program",
      features: [
        { icon: <Icon5 />, text: "Student Visa (F-1)" },
        { icon: <Icon6 />, text: "2-year program" },
        { icon: <Icon7 />, text: "Global networking" },
        { icon: <Icon8 />, text: "Leadership training" },
      ],
    },
    {
      id: 3,
      university: "Stanford University",
      program: "Computer Science PhD",
      features: [
        { icon: <Icon5 />, text: "Research-focused" },
        { icon: <Icon6 />, text: "5-year duration" },
        { icon: <Icon7 />, text: "Full funding available" },
        { icon: <Icon8 />, text: "Industry collaborations" },
      ],
    },
  ];
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
              Great! I've analyzed your documents. Based on your profile, here
              are your best migration pathways. Let's explore your options!
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {cardData.map((card) => (
              <Card key={card.id} className="bg-[#FFEFED] max-w-sm">
                <CardHeader>
                  <div className="h-10 w-10 rounded bg-black"></div>
                  <CardTitle>{card.university}</CardTitle>
                  <CardDescription>{card.program}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul>
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex gap-2 items-center ">
                        {feature.icon}
                        <p className="text-[#2F2F2F] font-montserrat text-[14px] font-normal leading-[164%]">
                          {feature.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="border max-w-[80%] mx-auto mb-5"></div>
                <CardFooter>
                  <div className="flex flex-col gap-2 w-full">
                    <Button>View More</Button>
                    <Button className="border bg-transparent text-[#FF5241] hover:text-white">
                      Compare plans
                    </Button>
                    <Button className="border bg-transparent text-[#FF5241] hover:text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="p-5  bg-[#FFEFED] max-w-7xl w-full mt-5 rounded mx-auto">
          <p className="text-[#2A2A2A] text-[16px] font-normal leading-[164%]">
            Here's what you need to do next:
          </p>
          <div>
            <div className="flex gap-2">
              <div className="bg-[#FF5241] h-5 w-5 rounded-full flex justify-center items-center text-white">
                1
              </div>
              <div>
                <h1>
                  Submit additional documents (Passport, Academic transcripts)
                </h1>
                <p className="text-[#2A2A2A] font-montserrat text-[14px] font-normal leading-[164%]">
                  Upload your academic transcripts, language test scores, and CV
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#FF5241] h-5 w-5 rounded-full flex justify-center items-center text-white">
                2
              </div>
              <div>
                <h1>Pay Application Fee</h1>
                <p className="text-[#2A2A2A] font-montserrat text-[14px] font-normal leading-[164%]">
                  Application fee: $100 AUD
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#FF5241] h-5 w-5 rounded-full flex justify-center items-center text-white">
                3
              </div>
              <div>
                <h1>Visa Interview</h1>
                <p className="text-[#2A2A2A] font-montserrat text-[14px] font-normal leading-[164%]">
                  Schedule your visa interview at the nearest embassy
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#FF5241] h-5 w-5 rounded-full flex justify-center items-center text-white">
                4
              </div>
              <div>
                <h1>Decision Timeline</h1>
                <p className="text-[#2A2A2A] font-montserrat text-[14px] font-normal leading-[164%]">
                  Expected decision: 4-6 weeks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5  bg-[#FFEFED] max-w-5xl rounded mx-auto  mt-5">
          <p className="text-black text-center font-montserrat text-[20px] font-semibold leading-[164%] max-w-xs mx-auto">
            Would you like assistance with your application?
          </p>

          <div className="flex gap-2 mt-5">
            <Button className="flex-1 border bg-transparent text-[#FF5241] hover:text-white">
              Yes, Connect Me with an Expert
            </Button>
            <Button className="flex-1 border bg-transparent text-[#FF5241] hover:text-white">
              No, I'll Apply Myself
            </Button>
          </div>
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
