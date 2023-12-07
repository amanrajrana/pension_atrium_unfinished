import Main from "@/Components/common/Main";
import MealSection from "@/Components/servicesSection/mealSection";
import SkiSection from "@/Components/servicesSection/skiSection";
import SportCenterSection from "@/Components/servicesSection/sportCenterSection";

const Services = () => {
  return (
    <Main className="space-y-20">
      <h1 className="text-center font-bold text-3xlg">Our Services</h1>
      <MealSection />
      <SportCenterSection />
      <SkiSection />
    </Main>
  );
};

export default Services;
