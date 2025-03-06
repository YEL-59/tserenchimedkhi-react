import Automation from "@/components/main/automation";
import HomeBanner from "@/components/main/home-banner";
import Plan from "@/components/main/plan";
import Revolutionizing from "@/components/main/Revolutionizing";
import SimplifyMigration from "@/components/main/simplify-migration";
import Subscribe from "@/components/main/subscribe";

const Home = () => {
  return (
    <>
      <div>
        <HomeBanner />
        <SimplifyMigration />
        <Plan />
        <Revolutionizing />
        <Automation />
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
