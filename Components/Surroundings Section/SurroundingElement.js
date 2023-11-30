// components/SurroundingElement.js
"use client";
import React, { useState, useEffect } from "react";
import ResponsiveImage from "../ResponsiveImage";
import imgAPI from "@/public/images/ImageApi";

const SurroundingElement = ({
  reverse,
  small_img,
  large_img,
  heading,
  text,
}) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isWideScreen = windowWidth >= 1000;

  const flexDirectionClass = reverse
    ? "flex-col lg:flex-row-reverse"
    : " lg:flex-row flex-col";

  return (
    <div className={` flex ${flexDirectionClass}  items-center p-4`}>
      {/* Left Part with Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <div className={isWideScreen ? "lg:mr-4" : "mb-4 mx-4"}>
         <ResponsiveImage small={small_img} large={large_img} icon={imgAPI.accom_vectors[9]}/>
        </div>
      </div>

      {/* Right Part with Heading and Text */}
      <div className="lg:w-1/2 w-full lg:ml-4 lg:mb-0 mb-4  ">
        <h2 className="text-2xl font-bold mx-4 mb-2">{heading}</h2>
        <p className="text-gray-600 mx-4">{text}</p>
      </div>
    </div>
  );
};

export default SurroundingElement;
