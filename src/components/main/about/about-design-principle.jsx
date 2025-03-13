import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
const DesignPrinciple = () => {
  const principles = [
    {
      id: "01",
      number: "24+",
      title: "Skilled Experts Driving Your Migration Success",
    },
    {
      id: "02",
      number: "19+",
      title: "Successful Migrations Completed Monthly",
    },
    {
      id: "03",
      number: "1+",
      title: "Years of experience",
    },
    {
      id: "04",
      number: "4",
      title: "Across Country",
    },
  ];

  return (
    <>
      <div className="container mx-auto bg-[#fff] shadow-sm">
        <div className="flex flex-col lg:flex-row justify-center gap-10 sm:gap-10 items-start p-10">
          <div className="text-center sm:text-left">
            <h3 className="text-[#FF5241] font-montserrat text-[16px] sm:text-[28px] font-normal leading-normal tracking-[-0.24px]">
              Our Design Principles
            </h3>
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-[#111] font-questrial text-[25px] sm:text-[40px] lg:text-[40px] font-normal leading-[128%] tracking-[-0.4px]">
              Whether you're planning to study, work, or settle abroad,
              EasyMigrate is dedicated to making your migration journey
              seamless, efficient, and stress-free with AI-powered precision.
            </p>
          </div>
        </div>
        <div className="py-5 border-b max-w-7xl mx-auto"></div>

        <div className="py-10 px-5 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="flex flex-col sm:flex-row gap-5"
              >
                <div>
                  <p className="text-[#337500] font-questrial text-[28px] sm:text-[32px] font-normal leading-normal tracking-[-0.28px]">
                    {principle.id}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div>
                    <p className="text-[#111] font-montserrat text-[40px] sm:text-[56px] font-semibold leading-normal tracking-[-0.56px]">
                      {principle.number}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#636363] font-montserrat text-[16px] sm:text-[18px] font-normal leading-normal">
                      {principle.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FFFCFC] p-10 container mx-auto"></div>

      <div className="container mx-auto bg-[#F2F1EF] mb-20">
        <div className="p-10">
          <h1 className="text-[#FF5241] font-questrial text-[24px] sm:text-[28px] font-normal leading-normal tracking-[-0.24px]">
            Subscribe to our newsletter
          </h1>
          <p className="text-black font-questrial text-[32px] sm:text-[40px] lg:text-[60px] font-normal md:leading-[72px] tracking-[-0.6px]">
            Get Expert Migration Tips, Updates, and Promotions Delivered
            Directly to Your Inbox—No Spam, Just Helpful Insights!
          </p>

          <div className="relative mt-5">
            <Input
              className="w-full  rounded-lg px-5   border border-b transition duration-300 pr-12 py-5 bg-transparent"
              placeholder="Type your email here"
            />
            <ArrowRight className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPrinciple;
