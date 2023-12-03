"use client";
import React, { useState } from "react";
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "./common/button";

const LanguageDrop = () => {
  const dropdown = [];
  const languages = [
    { code: "EN", name: "English", flag: imgAPI.home_vectors[22] },
    { code: "CZ", name: "CZECH", flag: imgAPI.home_vectors[23] },
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
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="bg-dropdown rounded-lg px-3 py-3 w-full justify-between text-lg gap-2 flex items-center"
      >
        <Image
          width="24"
          height="24"
          src={selectedLanguage.flag}
          alt="Language Flag"
          className="rounded-full"
        />
        {selectedLanguage.code}
        <MdKeyboardArrowDown />
      </button>

      {/* Dropdown Options */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded">
          {languages.map((languages, index) => (
            <div
              key={index}
              onClick={() => handleLanguageChange(languages)}
              className="block p-3 text-lg leading-7 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Image
                  width={24}
                  height={24}
                  src={languages.flag}
                  alt={`Flag for ${languages.name}`}
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
