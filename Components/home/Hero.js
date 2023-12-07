// Hero.js
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Img from "@/public/images/ImageApi";
import text from "@/public/text.json";
import { BSymbolIcon } from "@/Components/svg/icons";
import { Button } from "@/Components/common/button";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <section className="grid lg:grid-cols-2 gap-y-8 lg:gap-x-24 2xl:gap-x-36 3xl:gap-x-56 items-center mt-9 xl:mt-12">
      {/* Left side */}
      <div className="flex-1 w-full flex justify-center flex-col h-full">
        <h2 className="text-4xlg md:text-3xlg text-center lg:text-left font-bold mb-8 xl:text-6xl xl:leading-tight 3xl:text-7xl 3xl:leading-tight">
          Discover{" "}
          <span className="bg-gradient-to-r from-textgrad_1 to-textgrad_2 inline-block text-transparent bg-clip-text">
            Trutnov
          </span>
          &#39;s Hidden Gem
        </h2>
        <p className="text-gray-600 mb-12 text-center lg:text-left text-sm lg:text-lg xl:text-2xl 3xl:text-3xl">
          {text.hero_subtext}
        </p>

        <div className="grid grid-cols-2 w-full gap-4 mx-auto">
          {/* Check-in section */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Check-out:{" "}
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Check-out Date"
              calendarClassName="p-0 w-full"
              showIcon
              calendarIconClassname="absolute !pt-2.5 right-0"
              className="w-full !pr-32 lg:!pr-20    font-left !py-1.5 !pl-2 items-center font-light border border-gray-300 placeholder-placeColor rounded focus:outline-none"
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
              calendarClassName="p-0 w-full"
              showIcon
              calendarIconClassname="absolute !pt-2.5 right-0"
              className="w-full !pr-32 lg:!pr-20    font-left !py-1.5 !pl-2 items-center font-light border border-gray-300 placeholder-placeColor rounded focus:outline-none"
            />
          </div>

          <Button variant="gradient" className="col-span-2 gap-x-2 3xl:gap-x-3">
            <span className="xl:scale-110 3xl:scale-125">
              <BSymbolIcon />
            </span>
            {text.nav_btn}
          </Button>
        </div>
      </div>

      {/* Right side */}
      <Image
        width={600}
        height={500}
        sizes="100vw"
        src={Img.home_vectors.card}
        alt="card"
        priority
        className="object-fill lg:h-[90%] w-full"
      />
    </section>
  );
};

export default Hero;
