import React from "react";
import { LuBath } from "react-icons/lu";
import { PiTelevisionLight, PiToilet } from "react-icons/pi";
import { BiFridge } from "react-icons/bi";

const Element = ({ icon1, icon2, text1, text2 }) => {
  return (
    <div className="flex justify-between mb-4 items-end">
      <div className="mr-2 flex gap-4 items-end">
        <span className="text-customblue text-2xl">{icon1}</span>
        <p className="text-sm">{text1}</p>
      </div>

      <div className="flex gap-4 items-center">
        <span className="text-customblue text-2xl">{icon2}</span>
        <p className="text-sm">{text2}</p>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className=" w-auto rounded p-2 ">
      {/* Section 1 */}
      <div className="mb-2">
        <h3 className="text-lg text-center font-bold mb-2">Tourist</h3>
        <div>
          <Element
            icon1={<LuBath />}
            text1="Shared"
            icon2={<PiTelevisionLight />}
            text2="Shared"
          />
          <Element
            icon1={<PiToilet />}
            text1="Shared"
            icon2={<BiFridge />}
            text2="Shared"
          />
        </div>
        <hr className="my-4" />
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-lg text-center font-bold mb-1">Standard</h3>
        <div>
          <Element
            icon1={<LuBath />}
            text1="Private"
            icon2={<PiTelevisionLight />}
            text2="Private"
          />
          <Element
            icon1={<PiToilet />}
            text1="Private"
            icon2={<BiFridge />}
            text2="Private"
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
