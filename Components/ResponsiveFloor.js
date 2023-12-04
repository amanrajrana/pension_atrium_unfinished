"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ImageEffect from "./ImageEffect";
import text from "../public/text.json";
import imgAPI from "../public/images/ImageApi";
import Button from "./common/button";
import { BSymbolIcon } from "./svg/icons";
import { FaRegUser } from "react-icons/fa";

const ResponsiveFloor = ({ heading, desc }) => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  return (
    <div className="block lg:hidden mb-4">
      {/* Heading and Subtext */}
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold mb-6 mt-4">{heading}</h2>
        <p className="text-gray-500 text-center">{desc}</p>
      </div>

      <div className="flex-col items-center bg-floor p-4 rounded">
        {/* Element 1: Image */}

        {/* Element 2: Text with Icon */}
        <div className="flex justify-between mb-4">
          <div className="flex flex-col ">
            <p className="md:text-2xl text-xl font-medium text-customblue ">
              1 Bed Room
            </p>
            <div className="flex items-center mt-1 ">
              <p className="md:text-2xl text-sm  font-medium text-customblue flex gap-1">
                1
                <FaRegUser size={15} />
              </p>
            </div>
          </div>

          {/* Element 4 : Text and Subtext */}
          <div className="flex justify-center gap-4">
            <div className="flex justify-center flex-col">
              <p className="md:text-2xlg  text-sm text-customblue font-bold">
                500 Kč
              </p>
              <p className="text-gray-500 text-center mt-1">Tourist</p>
            </div>
            {/* Element 5: Text and Subtext */}

            <div className="flex justify-center flex-col">
              <p className="md:text-2xlg  text-sm text-customblue font-bold">
                600 Kč
              </p>
              <p className="text-gray-500 text-center mt-1">Standard</p>
            </div>
          </div>
        </div>

        <ImageEffect
          img1={imgAPI.accom_img[1]}
          img2={imgAPI.accom_vectors[9]}
        />

        {/* Element 6: Dropdown */}
        <div className="space-y-4 mt-4">
          <Dropdown
            value={dropdownValue}
            onChange={(value) => setDropdownValue(value)}
          />
          <Button variant="gradient">
            <span className="flex items-center gap-x-2">
              <BSymbolIcon />
              {text.nav_btn}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFloor;
