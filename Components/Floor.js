"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import text from "../public/text.json";
import Image from "next/image";
import imgAPI from "../public/images/ImageApi";
import ResponsiveFloor from "./ResponsiveFloor";
import { FaRegUser } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { BSymbolIcon } from "./svg/icons";
import Button from "./common/button";
import GalleryIcon from "./common/GalleryIcon";

const CustomComponent = ({ heading, desc }) => {
  const [dropdownValue, setDropdownValue] = useState(
    "Short-term stay (1-6 days)"
  );

  return (
    <>
      <div className="mb-4 hidden lg:block">
        {/* Heading and Subtext */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-6 mt-4">{heading}</h2>
          <p className="text-gray-500">{desc}</p>
        </div>

        <div className="flex items-center gap-26 bg-floor p-4 rounded">
          {/* Element 1: Image */}

          <div className="relative w-60 h-3/4">
            <Image
              width={240}
              height={150}
              sizes="100vw"
              src={imgAPI.accom_img[0]}
              alt="Background"
            />

            <GalleryIcon />
          </div>

          {/* Element 2: Text with Icon */}
          <div className="text-lg font-semibold text-customblue space-y-2">
            <p>1 Bed Room</p>
            <p className="flex items-center gap-x-1">
              1
              <FaRegUser size={15} />
            </p>
          </div>

          {/* Element 3: Vertical Line */}
          <div className="border h-32"></div>

          {/* Element 4 and 5: Text and Subtext */}
          <div className="flex justify-between bg-opacity-50 flex-1">
            <div className="flex justify-center flex-col">
              <p className="text-2xlg text-customblue font-bold">500 Kč</p>
              <p className="text-gray-500 text-center mt-1">Tourist</p>
            </div>

            <div className="flex justify-center flex-col">
              <p className="text-2xlg text-customblue font-bold">600 Kč</p>
              <p className="text-gray-500 text-center mt-1">Standard</p>
            </div>

            {/* Element 6: Dropdown */}
            <div className="flex flex-col gap-x-2 gap-y-4 items-center">
              <Dropdown
                value={dropdownValue}
                onChange={(value) => setDropdownValue(value)}
              />
              <Button>
                <span className="flex gap-2 items-center justify-center">
                  <BSymbolIcon />
                  {text.nav_btn}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveFloor heading="Ground Floor" desc={text.first_floor} />
      <ResponsiveFloor heading="First Floor" desc={text.ground_floor} />
    </>
  );
};

export default CustomComponent;
