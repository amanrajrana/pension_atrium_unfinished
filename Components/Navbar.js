// components/Navbar.js
"use client";
import React, { useState } from "react";
import content from "../public/text.json";
import images from "../public/images/ImageApi.js";
import Link from "next/link";
import Image from "next/image";
import LanguageDrop from "./LanguageDrop";
import Button from "./common/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black m-5 font-semibold  p-4 flex items-center md:justify-around justify-between font-urbanist">
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
      <div className="hidden lg:flex  justify-between space-x-9">
        <Link href="/accomodation">{content.nav_accom}</Link>

        <Link href="/services">{content.nav_ser}</Link>
        <Link href="/surroundings">{content.nav_surr}</Link>
        <Link href="/contact">{content.nav_contact}</Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="lg:hidden relative">
        <button
          type="button"
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <Image
            src={images.home_vectors[18]}
            alt="image"
            className="h-auto"
            width={32}
            height={32}
          />
        </button>

        {/* Responsive menu for mobile */}
        {isMenuOpen && (
          <div className="absolute top-8 p-4 right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg animate-slide-in">
            <Link href="/accommodation" className="block px-4 py-2 text-black">
              {content.nav_accom}
            </Link>
            <Link href="/services" className="block px-4 py-2 text-black">
              {content.nav_ser}
            </Link>
            <Link href="/surroundings" className="block px-4 py-2 text-black">
              {content.nav_surr}
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-black">
              {content.nav_contact}
            </Link>
            <LanguageDrop />
            <button className="gap-1 ml-4 mt-2 block text-white text-xs py-2 px-2 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 items-center font-urbanist">
              <Image
                src={images.home_vectors[1]}
                width={12}
                height={12}
                alt="image"
              />
              {content.nav_btn}
            </button>
          </div>
        )}
      </div>
      {/* Right side with language dropdown and button */}
      <div className="hidden lg:flex items-center space-x-4 bg-light">
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
    </nav>
  );
};

export default Navbar;
