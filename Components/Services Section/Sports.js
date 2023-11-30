// components/Sports.js
import imgAPI from "@/public/images/ImageApi";
import text from "../../public/text.json";
import SportsElements from "./SportsElements";
import ResponsiveImage from "../ResponsiveImage";

const Sports = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 items-center content-center mb-4">
      {/* Left Part with Image */}
      <div className="lg:mr-8 lg:w-3/6 lg:h-full mb-4">
        <ResponsiveImage
          small={imgAPI.ser_img[1]}
          large={imgAPI.ser_img[4]}
          icon={imgAPI.accom_vectors[9]}
        
        />
      </div>

      {/* Right Part with Sports Details */}
      <div className="lg:w-1/2 w-full mt-4 mx-4 lg:mx-0 lg:mt-0">
        <h2 className="text-2xl font-bold mb-2 mt-5 lg:mt-0">
          Sports Centre of Komensky School
        </h2>
        <p className="text-gray-600 ">{text.sports_txt}</p>

        <div className=" w-4/5 mt-2 lg:mt-4">
          <SportsElements />
        </div>
      </div>
    </div>
  );
};

export default Sports;
