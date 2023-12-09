"use client";

import Image from "next/image";
import Img from "@/public/images/ImageApi";
import text from "@/public/text.json";
import { BSymbolIcon } from "@/Components/svg/icons";
import { Button } from "@/Components/common/button";
import DateInputField from "./dateInputField";
import { useState } from "react";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

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
            <label className="block text-sm 3xl:text-2xl font-semibold text-gray-700 mb-1">
              Check-out:{" "}
            </label>
            <DateInputField date={checkInDate} setDate={setCheckInDate} />
          </div>

          {/* Check-out section */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm 3xl:text-2xl font-semibold text-gray-700 mb-1">
              Check-out:{" "}
            </label>
            <DateInputField date={checkOutDate} setDate={setCheckOutDate} />
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
