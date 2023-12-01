// components/MealComponent.js
import React from "react";
import imgAPI from "@/public/images/ImageApi";
import text from "../../public/text.json";
import Meal from "../Tables Section/Meal";
import ResponsiveImage from "../ResponsiveImage";

const MealComponent = () => {
  return (
    <div>
      <div>
        <p className="md:text-2x text-2xl font-bold text-center mt-16 mb-20 lg:mt-8 lg:mb-8">
          Our Services
        </p>
      </div>
      <div className="flex flex-col lg:flex-row p-4 lg:p-8 items-center content-center mb-4">
        {/* Left Part with Image */}
        <div className="lg:mr-8 lg:w-3/6 lg:h-full">

      
          <ResponsiveImage
            small={imgAPI.ser_img[0]}
            large={imgAPI.ser_img[3]}
            icon={imgAPI.accom_vectors[9]}
           
          />
          </div>

        {/* Right Part with Meal Details */}
        <div className="lg:w-1/2 w-full mt-4 mx-4 lg:mx-0 lg:mt-0">
          <h2 className="text-2xl  font-bold mb-2">Meals</h2>
          <p className="text-gray-600">{text.meal_1}</p>

          <div className=" w-3/5 mt-2 lg:mt-4">
            <Meal />
          </div>

          <div className="mt-2">
            <p className="text-gray-600 mb-2">{text.meal_2}</p>
            <p className="text-gray-600 mb-2">{text.meal_3}</p>
            <p className="text-gray-600 mb-2">{text.meal_4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealComponent;
