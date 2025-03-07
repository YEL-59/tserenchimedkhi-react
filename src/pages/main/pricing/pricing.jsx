import PriceAdvertige from "@/components/main/pricing/price-advertige";
import PriceBanner from "@/components/main/pricing/price-banner";
import PriceFaq from "@/components/main/pricing/price-faq";

const Pricing = () => {
  return (
    <>
      <div>
        <PriceBanner />
        <PriceAdvertige />
        <PriceFaq />
      </div>
    </>
  );
};

export default Pricing;
