const AboutBanner = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5 lg:flex-row justify-center items-center">
          {/* Heading */}
          <div className="text-center lg:text-left">
            <h1 className="text-[#111] text-[32px] sm:text-[36px] md:text-[40px] xl:text-[56px] 2xl:text-[71px] leading-[1.4] not-italic font-medium tracking-[-0.88px] max-w-5xl">
              Unveiling the Vision Behind EasyMigrate{' '}
              <span className="block xl:hidden">
                {' '}
                for Transforming Migration
              </span>
            </h1>
          </div>
          {/* Paragraph */}
          <div className="text-center sm:text-left">
            <p className="text-[#636363] text-[16px] sm:text-[18px] lg:text-[20px] not-italic font-light leading-[140%] tracking-[-0.4px] max-w-md">
              We're committed to making global migration seamless and
              stress-free. With AI-driven insights and expert guidance, we help
              you navigate your journey with confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
