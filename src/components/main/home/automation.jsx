import Task from '@/assets/task';
import Task2 from '@/assets/Task2';
import Task3 from '@/assets/Task3';
import Task4 from '@/assets/Task4';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../../ui/button';

// Card Data Array
const automationCards = [
  {
    id: 1,
    icon: <Task />,
    title: 'Get timely updates with notifications.',
    description:
      'Stay on top with automated notifications and reminders, ensuring deadlines are met and nothing is missed.',
  },
  {
    id: 2,
    icon: <Task2 />,
    title: 'Tailor access to document review',
    description:
      'ailor access to document review, ensuring only authorized users handle sensitive migration paperwork.',
  },
  {
    id: 3,
    icon: <Task3 />,
    title: 'Effortless Process Tracking',
    description:
      'Track your migration process effortlessly with real-time updates and insights.',
  },
  {
    id: 4,
    icon: <Task4 />,
    title: 'Actionable Analytics',
    description:
      'Gain actionable analytics to optimize your migration journey and make informed decisions.',
  },
];

const Automation = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 xl:py-16 2xl:py-20 px-4 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <h1 className="text-black font-montserrat sm:text-[36px] md:text-[40px] xl:text-[56px] 2xl:text-[71px] leading-[1.4] font-medium max-w-3xl">
          Unlock seamless automation for efficient migration.
        </h1>
        <div className="mt-5 lg:mt-0 max-w-lg">
          <p className="text-black/80 font-montserrat text-base md:text-lg leading-relaxed mb-5">
            You can revolutionize your business processes through powerful
            workflow automation. Our platform enables you to streamline
            repetitive tasks.
          </p>

          <Button className="px-5 w-full sm:w-auto">View More</Button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {automationCards.map((card) => (
          <Card
            key={card.id}
            className="w-full border-0 shadow-md flex flex-col h-full"
          >
            <CardHeader>
              <CardTitle>
                <div className="flex gap-4 items-center">
                  <div>{card.icon}</div>
                  <h2 className="text-black text-lg md:text-xl font-semibold leading-[30px]">
                    {card.title}
                  </h2>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black/80 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <p className="text-primary cursor-pointer">Learn More</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Automation;
