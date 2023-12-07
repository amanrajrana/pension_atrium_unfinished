import MealSection from "@/Components/servicesSection/mealSection";
import SkiSection from "@/Components/servicesSection/skiSection";
import SportCenterSection from "@/Components/servicesSection/sportCenterSection";

const Services = () => {
  return (
    <main className="font-urbanist max-w-screen-2xl mx-auto px-4 py-8 mb-10 lg:px-10 space-y-20">
      <h1 className="text-center font-bold text-3xlg">Our Services</h1>
      <MealSection />
      <SportCenterSection />
      <SkiSection />
    </main>
  );
};

export default Services;
