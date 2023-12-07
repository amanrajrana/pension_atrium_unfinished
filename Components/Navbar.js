// components/Navbar.js
"use client";
import React, { useState } from "react";
import content from "@/public/text.json";
import images from "@/public/images/ImageApi.js";
import Link from "next/link";
import Image from "next/image";
import LanguageDrop from "./LanguageDrop";
import Button from "@/Components/common/Button";
import Hamburger from "hamburger-react";
import { BSymbolIcon } from "@/Components/svg/icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = usePathname();

  // Make isNavOpen false when route changes
  React.useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

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
    <>
      <nav className="fixed w-full bg-white text-black font-semibold pt-7 p-4 lg:px-8 z-50 top-0">
        <div className="max-w-screen-4xl w-full mx-auto flex items-center justify-between font-urbanist">
          {/* Left side with icon */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={images.SVG__ICONS.LOGO}
                alt="PENSION ATRIUM logo"
                width={181}
                height={55}
                sizes="100vw"
                priority
                className="cursor-pointer object-fit h-auto 3xl:w-56 "
              />
            </Link>
          </div>

          {/* nav items */}
          <div
            className={`${
              isNavOpen
                ? "flex absolute  h-screen items-center bg-white justify-center top-0 left-0 w-screen -z-10 overflow-y-scroll"
                : "hidden"
            } min-h-max flex-col py-8 lg:py-0 lg:z-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:justify-between lg:relative lg:top-auto lg:left-auto w-full`}
          >
            <div className="flex min-h-max h-min relative lg:flex-1 lg:top-auto flex-col gap-y-8 xl:gap-y-10 w-full max-w-[302px] lg:max-w-full p-4 lg:flex-row gap-x-8 xl:text-lg 3xl:text-2xl font-semibold">
              {NAV__ITEMS.map(({ label, to }, index) => (
                <Link key={index} href={to}>
                  {label}
                </Link>
              ))}

              {/* Show only in small screens */}
              <div className="lg:hidden mt-8">
                <RightSide />
              </div>
            </div>
          </div>

          {/* Show only in large screens */}
          <div className="hidden lg:block">
            <RightSide />
          </div>

          <div className="lg:hidden">
            <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
          </div>
        </div>
      </nav>
      <div className="h-24">{/* Blank space Don't remove it*/}</div>
    </>
  );
};

export default Navbar;

const RightSide = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 3xl:gap-x-8 bg-light w-full">
      {/* Your language dropdown code goes here */}
      <LanguageDrop />

      {/* Button */}
      <Button variant="gradient" className="xl:text-sm font-bold 3xl:text-xl">
        <span className="flex items-center gap-2">
          <span className="3xl:scale-125">
            <BSymbolIcon />
          </span>
          <span className="text-sm 3xl:text-xl font-bold">
            {content.nav_btn}
          </span>
        </span>
      </Button>
    </div>
  );
};
