// components/Navbar.js
"use client";
import React, { useState } from "react";
import content from "@/public/text.json";
import images from "@/public/images/ImageApi.js";
import Link from "next/link";
import Image from "next/image";
import LanguageDrop from "./LanguageDrop";
import Button from "./common/button";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const NAV__ITEMS = [
    {
      label: "Accommodation",
      to: "accommodation",
    },
    {
      label: "Services",
      to: "services",
    },
    {
      label: "Surroundings",
      to: "surroundings",
    },
    {
      label: "Contact",
      to: "contact",
    },
  ];

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white bg-opacity-30 text-black font-semibold p-4 z-50 border-b border-gray-100 top-0">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between font-urbanist">
        {/* Left side with icon */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={images.SVG__ICONS.LOGO}
              alt="PENSION ATRIUM logo"
              width={181}
              height={55}
            />
          </Link>
        </div>

        {/* nav items */}
        <div
          className={`${
            isNavOpen
              ? "flex absolute h-screen items-center justify-center top-0 left-0 w-screen bg-white flex-col -z-10 overflow-y-auto"
              : "hidden"
          }  lg:z-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:relative lg:top-auto lg:left-auto lg:bg-transparent w-full`}
        >
          <div className="flex relative top-24 flex-1 lg:top-auto flex-col gap-y-8 w-full max-w-xs lg:max-w-full p-4 lg:flex-row gap-x-8">
            {NAV__ITEMS.map(({ label, to }, index) => (
              <Link key={index} href={to}>
                {label}
              </Link>
            ))}

            <div className="lg:hidden">
              <RightSide />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <RightSide />
        </div>

        <div className="lg:hidden">
          <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const RightSide = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 bg-light w-full">
      {/* Your language dropdown code goes here */}
      <LanguageDrop />

      {/* Button */}
      <Button variant="gradient">
        <div className="flex gap-2 text-lg">
          <Image
            src={images.SVG__ICONS.B_ICON}
            width={17}
            height={17}
            alt="image"
          />
          {content.nav_btn}
        </div>
      </Button>
    </div>
  );
};
