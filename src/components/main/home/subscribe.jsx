import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const Subscribe = () => {
  return (
    <div className="py-16 px-4 flex flex-col items-center text-center">
      <h1 className="text-black font-montserrat text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-4xl">
        Start your migration journey with EasyMigrate. Subscribe now!
      </h1>

      <div className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-5">
        <Input type="email" placeholder="Email" className="w-full py-6" />
        <Button type="submit" className="w-full sm:w-auto">
          Subscribe
        </Button>
      </div>

      <p className="text-black/80 font-montserrat text-base md:text-lg leading-relaxed max-w-3xl mt-5">
        Embark on a seamless migration journey with EasyMigrate. Subscribe now
        for powerful tools that streamline task management and collaboration.
      </p>
    </div>
  );
};

export default Subscribe;
