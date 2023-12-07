import { IoFastFoodOutline } from "react-icons/io5";
import { LuSoup } from "react-icons/lu";

const Element = ({ icon, text1, text2 }) => {
  return (
    <div className="flex  justify-between mb-4 items-center">
      <div className="mr-2 flex gap-4 items-center">
        <span className="text-customblue text-2xl-custom">{icon}</span>
        <p className="text-sm">{text1}</p>
      </div>
      <div className="items-center">
        <p className="text-blue-900 font-bold text-base">{text2}</p>
      </div>
    </div>
  );
};

const Meal = ({ mealText }) => {
  return (
    <div className=" w-auto rounded p-2 ">
      {/* Section 1 */}
      <div className="mb-2">
        <h3 className="text-sm text-center  mb-6">{mealText}</h3>
        <div>
          <Element
            icon={<IoFastFoodOutline />}
            text1="Breakfast"
            text2="80 Kč"
          />
          <Element icon={<LuSoup />} text1="Half board" text2="160 Kč" />
          <Element icon={<LuSoup />} text1="Full board" text2="240 Kč" />
        </div>
      </div>
    </div>
  );
};

export default Meal;
