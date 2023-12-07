import { IoFastFoodOutline } from "react-icons/io5";
import { LuSoup } from "react-icons/lu";
import {
  ContentContainer,
  H2,
  ResponsiveImage,
  Section,
} from "./contentComponents.js.js";

const MealSection = () => {
  const sizeOfIcon = 22;
  const MEAL_LIST = [
    {
      icon: <IoFastFoodOutline size={sizeOfIcon} />,
      mealName: "Breakfast",
      quantity: "80 Kč",
    },
    {
      icon: <LuSoup size={sizeOfIcon} />,
      mealName: "Half board",
      quantity: "160 Kč",
    },
    {
      icon: <LuSoup size={sizeOfIcon} />,
      mealName: "Full board",
      quantity: "240 Kč",
    },
  ];

  return (
    <Section>
      <ResponsiveImage image="/images/gallery/ser1.png" />
      <ContentContainer>
        <H2>Meals</H2>

        <p>
          Only for group consisting of 20 people or more - need to order in
          advance
        </p>

        {/* Meal List */}
        <ul className="max-w-xs space-y-4">
          {MEAL_LIST.map((meal, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex gap-x-4">
                <span>{meal.icon}</span>
                <span className="font-bold">{meal.mealName}</span>
              </div>

              <div className="text-customblue font-bold">{meal.quantity}</div>
            </li>
          ))}
        </ul>

        <p>Snacks and drinks at the reception desk (18:00 - 21:00)</p>
        <p>Self cooking (induction cooker, microwave oven, dishes available)</p>
        <p>Dining room for 35 people</p>
      </ContentContainer>
    </Section>
  );
};

export default MealSection;
