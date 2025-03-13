import brand1 from '@/assets/brands/logo-1.png';
import brand2 from '@/assets/brands/logo-2.png';
import brand3 from '@/assets/brands/logo-3.png';
import brand4 from '@/assets/brands/logo-4.png';
import brand5 from '@/assets/brands/logo-5.png';
import Graph from '@/assets/graph1';
import Graph2 from '@/assets/graph2';
import Task from '@/assets/task';
import Task1 from '@/assets/task1';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router';
import line from '../../../assets/Line.png';
import bannerbg from '../../../assets/banner.png';
import { Button } from '../../ui/button';

const HomeBanner = () => {
  return (
    <>
      <div className="container flex gap-8">
        <div className="w-[8%] h-[452px] hidden sm:block">
          <img src={line} alt="Line Art" className="w-full" />
        </div>
        <div className="flex-1 mt-[4%] relative">
          <div className="flex gap-[70px]">
            <div className="w-[40%] hidden xl:block">
              <img src={bannerbg} alt="Globe" className="w-full" />
            </div>
            <div className="flex-1">
              <h1 className="text-[24px] sm:text-[36px] md:text-[40px] xl:text-[56px] 2xl:text-[71px] font-medium">
                Transform Your Migration Efficiency
              </h1>
              <p className="text-[16px] font-normal max-w-xl">
                Optimize your migration journey with EasyMigrate, the all-in-one
                AI-powered platform designed to help students and professionals
                seamlessly relocate to their preferred country.
              </p>
              <div className="flex gap-5 mt-5 mb-5">
                <Link to="/dashboard/chat">
                  <Button>Get Started</Button>
                </Link>
                <Button variant="outline">Contact Us</Button>
              </div>

              <div className="relative xl:mt-[56px] 2xl:mt-[84px] left-0 xl:-left-[124px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 md:flex-row gap-5 w-full xl:w-[calc(100%+124px)]">
                  <Card className="border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)]">
                    <CardHeader>
                      <CardTitle>
                        <div className="flex gap-5 items-center">
                          <div>
                            <Task />
                          </div>
                          <h2 className="text-black  text-xl not-italic font-semibold leading-[30px]">
                            Task Automation
                          </h2>
                        </div>{' '}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="max-w-sm text-black/80  text-base not-italic font-normal leading-[30px]">
                        Our platform automates your migration journey with smart
                        triggers and actions, making relocation seamless and
                        stress-free.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)]">
                    <CardHeader>
                      <CardTitle>
                        <div className="flex gap-5 items-center">
                          <div>
                            <Task1 />
                          </div>
                          <h2 className="text-black  text-xl not-italic font-semibold leading-[30px]">
                            Real-Time Collaborate
                          </h2>
                        </div>{' '}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="max-w-sm text-black/80  text-base not-italic font-normal leading-[30px]">
                        Enhance your migration journey with real-time
                        collaboration. Track progress, manage tasks, and stay
                        organized effortlessly.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <Card className="w-[419px] aspect-[419/270] rounded-xl border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)] absolute bottom-0 -left-[calc(8%+32px)] hidden xl:block">
            <CardHeader>
              <CardTitle>
                <h1 className="max-w-[250px] text-lg">
                  Migration with AI-powered solutions.
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p>People Migrate</p>
                  <p className="text-2xl font-bold">150k+</p>
                </div>
                <div>
                  <Graph />
                </div>
              </div>
            </CardContent>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p>Total Countries</p>
                  <p className="text-2xl font-bold">100k+</p>
                </div>
                <div>
                  <Graph2 />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-5 container mx-auto py-[40px] sm:py-[80] xl:py-[90px] 2xl:py-[114px]">
        <div className="w-[100px] sm:w-[170px]">
          <img src={brand1} alt="Brand 1" className="w-full" />
        </div>
        <div className="w-[100px] sm:w-[170px]">
          <img src={brand2} alt="Brand 1" className="w-full" />
        </div>
        <div className="w-[100px] sm:w-[170px]">
          <img src={brand3} alt="Brand 1" className="w-full" />
        </div>
        <div className="w-[100px] sm:w-[170px]">
          <img src={brand4} alt="Brand 1" className="w-full" />
        </div>
        <div className="w-[100px] sm:w-[170px]">
          <img src={brand5} alt="Brand 1" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
