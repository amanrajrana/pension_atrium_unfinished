import { IoBusOutline } from "react-icons/io5";
import { PiTelevisionLight } from "react-icons/pi";
import { TbWashDry1 } from "react-icons/tb";

const Element = ({ icon, text, subtext, text2 }) => {
  return (
    <div className="flex justify-between mt-2 mb-8">
      <div className="mr-2 flex gap-4 items-center">
        <span className="text-customblue text-2xl">{icon}</span>
        <div className="flex-col items-center">
          <p className="text-sm font-bold">{text}</p>
          <p className="text-sm">{subtext}</p>
        </div>
      </div>
      <div className="items-center">
        <p className="text-blue-900 font-bold text-xl">{text2}</p>
      </div>
    </div>
  );
};

const Meal = () => {
  return (
    <div className=" w-auto rounded p-2 ">
      <div className="mb-2">
        <Element
          icon={<IoBusOutline />}
          text="Transport"
          subtext="VW Transporter,max. 8 people"
          text2="10 Kč/km"
        />
        <Element
          icon={<TbWashDry1 />}
          text="Laundry"
          subtext="Max. 7Kg"
          text2="150 Kč"
        />
        <Element
          icon={<PiTelevisionLight />}
          text="Borrowing TV"
          subtext="Only for Tourist Room"
          text2="50 Kč/day"
        />
      </div>
    </div>
  );
};

export default Meal;
