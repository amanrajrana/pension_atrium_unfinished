import Rooms from "./Rooms";
import Meal from "./Meal";
import Others from "./Others";
import text from "@/public/text.json";

const BorderedBox = ({ headerText, section }) => {
  return (
    <div className={`w-full overflow-hidden`}>
      <div className="bg-gradient-to-r from-btngrad_1 to-btngrad_2 w-full text-white text-center p-2">
        <h2 className="text-lg 3xl:text-2xl font-bold">{headerText}</h2>
      </div>
      <div className="p-3">{section}</div>
    </div>
  );
};

const Tables = () => {
  return (
    <div className="mt-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bottom-0 border rounded shadow overflow-hidden">
          <BorderedBox headerText="Room Type" section={<Rooms />} />
        </div>

        <div className="bottom-0 border rounded shadow overflow-hidden">
          <BorderedBox
            headerText="Meal"
            section={<Meal mealText={text.accom_meal} />}
          />
        </div>

        <div className="border sm:col-span-2 lg:col-span-1 rounded shadow overflow-hidden">
          <BorderedBox headerText="Other services" section={<Others />} />
        </div>
      </div>
    </div>
  );
};

export default Tables;
