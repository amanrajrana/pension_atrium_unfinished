// Hero.js
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Img from "../public/images/ImageApi";
import text from "../public/text.json";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* Left side */}
        <div className="flex-1 p-4 max-w-lg">
          <h2 className="text-3xl text-center lg:text-left font-bold mb-8">
            <span>Discover </span>
            <span className="bg-gradient-to-r from-textgrad_1 to-textgrad_2 inline-block text-transparent bg-clip-text">
              Trutnov
            </span>
            &#39;s Hidden Gem
          </h2>
          <p className="text-gray-600 mb-12 text-center lg:text-left text-2xl">
            {text.hero_subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Check-in section */}
            <div className="mb-4 flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Check-in:{" "}
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Check-in Date"
                calendarClassName="p-0"
                showIcon
                calendarIconClassname="absolute !pt-2.5 right-0"
                className="w-full !pr-32 lg:!pr-20    font-left !py-1.5 !pl-2 items-center font-light border border-gray-300 placeholder-placeColor rounded focus:outline-none"
              />
            </div>

            {/* Check-out section */}
            <div className="mb-4 flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Check-out:{" "}
              </label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Check-out Date"
                calendarClassName="p-0"
                showIcon
                calendarIconClassname="absolute !pt-2.5 right-0"
                className="w-full !pr-32 lg:!pr-20    font-left !py-1.5 !pl-2 items-center font-light border border-gray-300 placeholder-placeColor rounded focus:outline-none"
              />
            </div>
          </div>
          <button className="w-full py-3 px-4 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 bg-opacity-90 hover:bg-opacity-100 text-white text-sm font-semibold flex items-center justify-center gap-1 font-urbanist">
            <Image
              src={Img.SVG__ICONS.B_ICON}
              width={18}
              height={18}
              alt="image"
            />
            {text.nav_btn}
          </button>
        </div>

        {/* Right side */}
        <div className=" w-1/2 p-4">
          <Image
            width={570}
            height={564}
            src={Img.home_vectors.card}
            alt="card"
            className="rounded h-full w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
