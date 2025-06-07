import Arrow from "@/assets/arrow";
import Right from "@/assets/right";
import Task from "@/assets/task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import revolutionizing from "../../../assets/revolutionizing.png";
import { useGetALL } from "@/hooks/home.hook";

const Revolutionizing = () => {
  const { collaboration: data } = useGetALL();
  console.log({ data });
  const features = data[0]?.collaboration_content;

  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12 xl:py-16 2xl:py-20 container mx-auto mt-8">
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="relative">
            <img
              src={revolutionizing} //data[0]?.background_image_url
              alt="Revolutionizing Migration"
              className="hidden lg:block"
            />
            <div className="absolute -top-32 -left-24 hidden lg:block">
              <Arrow />
            </div>

            <div className="absolute bottom-[5rem] left-16 hidden lg:block">
              <Card className="max-w-xl w-[309px] border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)]">
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-5 items-center">
                      <div>
                        <Task />
                      </div>
                      <h2 className="text-black text-sm not-italic font-semibold leading-[30px]">
                        {data[0]?.migration_title || "text"}
                      </h2>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="max-w-sm text-black/80 text-xs not-italic font-normal leading-[30px]">
                    {data[0]?.migration_description || "text"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-black font-montserrat sm:text-[36px] md:text-[40px] xl:text-[56px] 2xl:text-[71px] leading-[1.4] font-medium tracking-tight max-w-3xl mb-5">
                {data[0]?.heading || "text"}
              </h1>
              <p>{data[0]?.subheading || "text"}</p>

              <div className="flex flex-col gap-5 mt-5 mb-5">
                {/* Map through features */}
                {features.map((feature, id) => (
                  <div
                    key={id}
                    className="border border-dashed border-red-500 p-5 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <Right />
                      <p className="text-black font-montserrat text-[20px] not-italic font-medium leading-[30px] tracking-tight">
                        {feature?.heading}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revolutionizing;
