import Logo1 from "@/assets/logo1";
import Logo2 from "@/assets/logo2";
import Logo3 from "@/assets/logo3";
import Logo4 from "@/assets/logo4";
import Logo5 from "@/assets/logo5";

const PriceAdvertige = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
        <div className="flex justify-center">
          <Logo1 />
        </div>
        <div className="flex justify-center">
          <Logo2 />
        </div>
        <div className="flex justify-center">
          <Logo3 />
        </div>
        <div className="flex justify-center">
          <Logo4 />
        </div>
        <div className="flex justify-center">
          <Logo5 />
        </div>
      </div>
    </div>
  );
};

export default PriceAdvertige;
