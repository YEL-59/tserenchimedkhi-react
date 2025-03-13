import bg from "../../../assets/pricepattern.png";
import Righticon from "@/assets/righticon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../ui/button";
import { Badge } from "@/components/ui/badge";

const PriceBanner = () => {
  const plans = [
    {
      title: "Free",
      description: "per user/month, billed annually",
      price: "$0",
      ulhead: "For Small Teams",
      "badge-percentage": "-15%",
      badge: false,
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
    },
    {
      title: "Basic",
      description: "per user/month, billed annually",
      price: "$39",
      "badge-percentage": "15%",
      ulhead: "For Growing Teams",
      badge: true,
      features: ["Private lists", "Enhanced email sending", "No seat limits"],
    },
    {
      title: "Pro",
      description: "per user/month, billed annually",
      ulhead: "For Scaling Businesses",
      price: "$59",
      "badge-percentage": "25%",
      badge: true,
      features: [
        "Fully adjustable permissions",
        "Advanced data enrichment",
        "Priority support",
      ],
    },
  ];

  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-black font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[120%]">
          Tailored Migration Plans for Every Step of Your Journey
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-[120%] max-w-3xl mx-auto py-5">
          Choose the right plan to simplify your migration process with expert
          guidance and AI-powered support.
        </p>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col h-full shadow-lg p-6">
            <CardHeader>
              <CardTitle className="text-black font-montserrat text-xl sm:text-2xl font-semibold">
                {plan.title}
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm sm:text-base">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-black text-3xl sm:text-4xl font-semibold">
                {plan.price}
              </p>
              {plan.badge && (
                <Badge className="ml-3 text-sm sm:text-base">
                  {plan["badge-percentage"]}
                </Badge>
              )}
            </CardContent>
            <CardContent className="flex-grow">
              <h1 className="mb-2 text-black font-montserrat text-sm sm:text-base font-medium">
                {plan.ulhead}
              </h1>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 mb-4">
                    <Righticon />
                    <p className="text-black text-xs sm:text-sm font-medium">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full text-sm sm:text-base">
                Get This Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PriceBanner;
