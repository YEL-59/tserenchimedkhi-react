import Folder from "@/assets/folder";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import line1 from "../../../assets/Line (1).png";
import migration from "../../../assets/migration.png";
import { Button } from "../../ui/button";
import { useGetALL } from "@/hooks/home.hook";

const SimplifyMigration = () => {
  const { automation } = useGetALL();
  console.log({ automation });
  return (
    <>
      <div className="container pt-10 pb-32 xl:py-20">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10">
          <div>
            <div>
              <h1 className="text-black font-montserrat text-[32px] sm:text-[36px] md:text-[40px] xl:text-[56px] 2xl:text-[71px] not-italic font-medium leading-[1.4] max-w-2xl">
                {automation[0]?.heading}
              </h1>
              <p className="text-[16px] font-normal leading-[30px]">
                {automation[0]?.subheading}
              </p>
              <div className="flex gap-5 mt-5 mb-10">
                <Button className="px-7 py-2">{automation[0]?.button1}</Button>
                <Button className="bg-white text-black border px-7 py-2">
                  {automation[0]?.button2}
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-10">
                <div>
                  <Card className="w-full sm:max-w-[288px] text-center flex flex-col items-center">
                    <CardHeader className="flex flex-col items-center">
                      <Folder className="w-6 h-6" />
                      <CardTitle className="text-center">
                        {automation[0]?.manage_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <p className="text-center">
                        {automation[0]?.manage_description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center">
                      <p className="text-primary text-center text-sm">
                        Learn More
                      </p>
                    </CardFooter>
                  </Card>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <div className=" text-start p-0">
                      <h1 className="text-4xl font-semibold">
                        {automation[0]?.percentage[0]?.value}
                      </h1>

                      <p
                        className="max-w-sm text-black/80 font-montserrat text-xl not-italic font-normal leading-[33px]
"
                      >
                        {automation[0]?.percentage[0]?.description}
                      </p>
                    </div>
                    <div>
                      {" "}
                      <div>
                        {" "}
                        <div className=" text-start p-0">
                          <h1 className="text-4xl font-semibold">
                            {" "}
                            {automation[0]?.percentage[1]?.value}
                          </h1>

                          <p
                            className="max-w-sm text-black/80  text-xl not-italic font-normal leading-[33px]
"
                          >
                            {automation[0]?.percentage[1]?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* automation[0]?.background_image_url */}
            <img src={migration} alt="" />
            <div className="absolute left-28 -mt-10">
              <Card className="w-[300px]">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">100+</CardTitle>
                  <CardDescription>
                    Help People to Migrate Daily
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={line1} alt="" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimplifyMigration;
