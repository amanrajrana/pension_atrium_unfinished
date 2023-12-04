// Hero.js
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Img from "../public/images/ImageApi";
import text from "../public/text.json";
import { BSymbolIcon } from "./svg/icons";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <section className="max-w-screen-2xl mx-auto mt-16 md:mt-20 px-4 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-y-8">
        {/* Left side */}
        <div className="flex-1 lg:max-w-lg flex justify-center flex-col">
          <h2 className="text-2x md:text-3xl text-center lg:text-left font-bold mb-8">
            <span>Discover </span>
            <span className="bg-gradient-to-r from-textgrad_1 to-textgrad_2 inline-block text-transparent bg-clip-text">
              Trutnov
            </span>
            &#39;s Hidden Gem
          </h2>
          <p className="text-gray-600 mb-12 text-center lg:text-left text-sm lg:text-lg">
            {text.hero_subtext}
          </p>
          <div className="grid grid-cols-2 max-w-max gap-4 mx-auto">
            {/* Check-in section */}
            <div className="col-span-2 sm:col-span-1">
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
                className="!w-full !pr-32 lg:!pr-20 font-left !py-1.5 !pl-2 items-center font-light border border-gray-300 placeholder-placeColor rounded focus:outline-none"
              />
            </div>

            {/* Check-out section */}
            <div className="col-span-2 sm:col-span-1">
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

            <button className="w-full py-3 px-4 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 bg-opacity-90 hover:bg-opacity-100 text-white text-sm font-semibold flex items-center justify-center gap-1 font-urbanist col-span-2">
              <BSymbolIcon />
              {text.nav_btn}
            </button>
          </div>
        </div>

        {/* Right side */}
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={Img.home_vectors.card}
          alt="card"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
