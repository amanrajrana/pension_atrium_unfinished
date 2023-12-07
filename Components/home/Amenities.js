import { IoIosWifi } from "react-icons/io";
import { MdBed } from "react-icons/md";
import { LuParkingSquare } from "react-icons/lu";
import { FaBusAlt, FaWheelchair } from "react-icons/fa";
import { RiGroup2Line } from "react-icons/ri";
import { PlayIcon, TvIcon } from "@/Components/svg/icons";
import { H2 } from "@/Components/common/Headings";
import { PiTelevision } from "react-icons/pi";

const Amenities = () => {
  const icon_size = 55; // size of the icons

  // * Data for the amenities section
  const AMENITIES_DATA = [
    { icon: <IoIosWifi />, text: "Free wi-fi" },
    { icon: <PlayIcon />, text: "Garden with playground" },
    {
      icon: <MdBed />,
      text: "Beds from 200 Kč (8€) per night",
    },
    { icon: <LuParkingSquare />, text: "Free parking" },
    { icon: <FaWheelchair />, text: "Wheelchair accessible" },
    {
      icon: <FaBusAlt />,
      text: "Close to the bus terminal and train station.",
    },
    {
      icon: <RiGroup2Line />,
      text: "Group discounts and long stay discounts",
    },
    {
      icon: <PiTelevision />,
      text: "Kitchen and meeting room with TV",
    },
  ];

  return (
    <section className="my-8 py-8 flex flex-col justify-center items-center px-2">
      <H2 className="text-center">Our Amenities</H2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-8 w-full max-w-4xl 3xl:max-w-5xl">
        {AMENITIES_DATA.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-sm 3xl:text-xl gap-2 font-semibold text-[#414141] flex-col max-w-[200px] text-center mx-auto"
          >
            <div className="text-customblue text-5xl 3xl:text-6xl">
              {item.icon}
            </div>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
