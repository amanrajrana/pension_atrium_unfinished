import { IoIosWifi } from "react-icons/io";
import { MdBed } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { FaBusAlt, FaWheelchair } from "react-icons/fa";
import { RiGroup2Line } from "react-icons/ri";
import { PlayIcon, TvIcon } from "@/Components/svg/icons";

const Amenities = () => {
  const icon_size = 55; // size of the icons

  // * Data for the amenities section
  const AMENITIES_DATA = [
    { icon: <IoIosWifi size={icon_size} />, text: "Free wi-fi" },
    { icon: <PlayIcon />, text: "Garden with playground" },
    {
      icon: <MdBed size={icon_size} />,
      text: "Beds from 200 Kč (8€) per night",
    },
    { icon: <LuParkingSquare size={icon_size} />, text: "Free parking" },
    { icon: <FaWheelchair size={icon_size} />, text: "Wheelchair accessible" },
    {
      icon: <FaBusAlt size={icon_size} />,
      text: "Close to the bus terminal and train station.",
    },
    {
      icon: <RiGroup2Line size={icon_size} />,
      text: "Group discounts and long stay discounts",
    },
    {
      icon: <TvIcon />,
      text: "Kitchen and meeting room with TV",
    },
  ];

  return (
    <section className="my-8 py-8 flex flex-col justify-center items-center px-2">
      <h2 className="text-4xl font-semibold text-center">Our Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-8 w-full max-w-4xl">
        {AMENITIES_DATA.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-sm gap-2 font-semibold text-[#414141] flex-col max-w-[200px] text-center mx-auto"
          >
            <div className="text-customblue">{item.icon}</div>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
