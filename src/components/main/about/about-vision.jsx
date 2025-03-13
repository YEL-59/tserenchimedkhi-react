import aboutimg1 from "../../../assets/about1.png";
import aboutimg2 from "../../../assets/about2.png";
import aboutimg3 from "../../../assets/about3.png";

const AboutVision = () => {
  return (
    <>
      <div className="mt-20 sm:mt-40 lg:mt-60 xl:mt-80">
        <div className="container mx-auto bg-[#F2F1EF] p-4 sm:p-6 lg:p-10 h-auto">
          {/* Images and Heading */}
          <div className="flex flex-col sm:flex-row justify-center items-end gap-5 -mt-20 sm:-mt-40 lg:-mt-60 relative">
            <div>
              <img src={aboutimg1} alt="" className="w-full sm:w-auto" />
            </div>
            <div className="w-full sm:w-auto">
              <img src={aboutimg2} alt="" className="w-full sm:w-auto  max-h-[340px] sm:h-auto" />
            </div>
            <div>
              <h1 className="text-[#111] text-right font-montserrat lg:text-[72px] 2xl:text-[88px] not-italic font-normal leading-normal tracking-[-0.88px] absolute -top-[10rem] left-[450px]  hidden xl:block">
                for Transforming Migration
              </h1>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="mt-10 sm:mt-20 lg:mt-40 xl:mt-50 2xl:mt-60">
            <p className="text-[#636363] font-montserrat text-[16px] sm:text-[18px] lg:text-[20px] not-italic font-medium leading-[164%] tracking-[-0.4px]  max-w-6xl mx-auto">
              Seamless migration starts today. With AI-powered insights, we
              simplify your journey to a new country. Optimize your options,
              unlock opportunities, and navigate the process with confidence.
              Stay ahead, make informed decisions, and turn your migration goals
              into reality.
            </p>
            <p className="text-[#636363] font-montserrat text-[16px] sm:text-[18px] lg:text-[20px] not-italic font-medium leading-[164%] tracking-[-0.4px] max-w-6xl mx-auto">
              Navigate your migration journey with clarity and confidence. Our
              AI-powered platform cuts through complexities, ensuring a smooth
              transition to your new country. From key milestones to final
              approvals, we streamline the process, adapt to challenges, and
              scale solutions to fit your needs.
            </p>

            {/* Design Principles */}
            <div className="py-10 sm:py-20 max-w-6xl mx-auto">
              <h3 className="text-[#FF5241] font-montserrat text-[20px] sm:text-[24px] not-italic font-normal leading-normal tracking-[-0.24px]">
                Our Design Principles
              </h3>
              <p className="text-[#111] font-questrial text-[24px] sm:text-[32px] lg:text-[40px] not-italic font-normal leading-[128%] tracking-[-0.4px] mt-4">
                Whether you're planning to study, work, or settle abroad,
                EasyMigrate is dedicated to making your migration journey
                seamless, efficient, and stress-free with AI-powered precision.
              </p>
            </div>

            {/* Principles Grid */}
            <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {["Simplicity", "Accuracy", "Transparency", "Reliability"].map(
                (principle, index) => (
                  <div key={index} className="flex items-start">
                    <div>
                      <p className="text-[#FF5241] font-questrial text-[24px] sm:text-[32px] not-italic font-normal leading-normal tracking-[-0.32px]">
                        0{index + 1}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#111] font-montserrat text-[32px] sm:text-[40px] lg:text-[48px] not-italic font-normal leading-normal">
                        {principle}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Bottom Image */}
            <div className="max-w-6xl mx-auto pb-10">
              <img src={aboutimg3} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVision;
