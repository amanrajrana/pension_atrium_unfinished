import { H1 } from "@/Components/common/Headings";
import Main from "@/Components/common/Main";
import MealSection from "@/Components/services/mealSection";
import SkiSection from "@/Components/services/skiSection";
import SportCenterSection from "@/Components/services/sportCenterSection";

const Services = () => {
  return (
    <Main className="space-y-20">
      <H1 className="text-center">Our Services</H1>
      <MealSection />
      <SportCenterSection />
      <SkiSection />
    </Main>
  );
};

export default Services;
