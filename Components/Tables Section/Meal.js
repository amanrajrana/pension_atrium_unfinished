import React from "react";
import Image from "next/image";
import imgAPI from "@/public/images/ImageApi";


const Element = ({ image1, text1, text2 }) => {
  return (
    <div className="flex  justify-between mb-4">
      <div className="mr-2 flex gap-4 items-center">
        <Image src={image1} height={21} width={21} sizes="100vh" alt="icon" className="h-6 w-6" /> {/*  */}
        <p className="text-sm">{text1}</p>
      </div>
      <div className="items-center">
        <p className="text-blue-900 font-bold text-xl">{text2}</p>
      </div>
    </div>
  );
};

const Meal = ({mealText}) => {
  return (
    <div className=" w-auto rounded p-2 ">
      {/* Section 1 */}
      <div className="mb-2">
        <h3 className="text-sm text-center  mb-6">{mealText}</h3>
        <div>
          <Element
            image1={imgAPI.accom_vectors[4]}
            text1="Breakfast"
            text2="80 Kč"
          />
          <Element
            image1={imgAPI.accom_vectors[5]}
            text1="Half board"
            text2="160 Kč"
          />
          <Element
            image1={imgAPI.accom_vectors[5]}
            text1="Full board"
            text2="240 Kč"
          />
        </div>
      </div>
    </div>
  );
};

export default Meal;
