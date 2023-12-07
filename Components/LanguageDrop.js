"use client";
import React, { useState } from "react";
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "./common/Button";

const LanguageDrop = () => {
  const dropdown = [];
  const languages = [
    { code: "EN", name: "English", flag: imgAPI.home_vectors.US_FLAG },
    { code: "CZ", name: "CZECH", flag: imgAPI.home_vectors.CZ_FLAG },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <Button variant="customWhite" onClick={toggleDropdown}>
        <div className="flex gap-2 items-center h-full">
          <Image
            width={26}
            height={26}
            src={selectedLanguage.flag}
            alt="Language Flag"
            className="rounded-full aspect-square min-w-max min-h-max object-fill lg:w-5/6 3xl:w-full h-auto "
          />

          <span className="text-sm font-bold 3xl:text-2xl">
            {selectedLanguage.code}
          </span>
        </div>
        <MdKeyboardArrowDown className="text-2xl-custom self-end" />
      </Button>

      {/* Dropdown Options */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded">
          {languages.map((languages, index) => (
            <div
              key={index}
              onClick={() => handleLanguageChange(languages)}
              className="block p-3 leading-7 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Image
                  width={24}
                  height={24}
                  src={languages.flag}
                  alt={`Flag for ${languages.name}`}
                  className="rounded-full aspect-square"
                />
                <span>{languages.code}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDrop;
