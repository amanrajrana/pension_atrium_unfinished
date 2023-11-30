import React from "react";
import Image from "next/image";
import imgAPI from "@/public/images/ImageApi";


const Element = ({ image1, text,subtext, text2 }) => {
  return (
    <div className="flex  justify-between mt-2 mb-8">
      <div className="mr-2 flex gap-2 items-center">
        <Image src={image1} height={21} width={21} alt="icon" className="h-6 w-6" /> {/*  */}
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
            image1={imgAPI.accom_vectors[6]}
            text="Transport"
            subtext="VW Transporter,max. 8 people"
            text2="10 Kč/km"
          />
          <Element
            image1={imgAPI.accom_vectors[7]}
            text="Laundary"
            subtext="Max. 7Kg"
            text2="150 Kč"
          />
          <Element
            image1={imgAPI.accom_vectors[8]}
            text="Borrwing TV"
            subtext="Only for Tourist Room"
            text2="50 Kč/day"
          />
        </div>
      </div>
   
  );
};

export default Meal;
