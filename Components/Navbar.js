// components/Navbar.js
'use client'
import React, { useState } from 'react';
import content from '../public/text.json';
import images from '../public/images/ImageApi.js';
import Link from 'next/link';
import Image from 'next/image';
import LanguageDrop from './LanguageDrop';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black m-5  p-4 flex items-center md:justify-around justify-between font-urbanist">
      {/* Left side with icon */}
      <div className="flex items-center">
        <Link href='/'>
        <img src={images.home_vectors[0]} alt="Icon" className="h-10" />
        </Link>
       
      </div>
      <div className="hidden lg:flex  justify-between space-x-9">
        <Link href='/accomodation'>
         {content.nav_accom}
        </Link>
       
       <Link href='/services'>
        {content.nav_ser}
       
       </Link>
      <Link href='/surroundings'>
      {content.nav_surr}
      </Link>
      <Link href='/contact'>
      {content.nav_contact}
      </Link>
        
       
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="lg:hidden relative">
      <button type="button" className="focus:outline-none" onClick={toggleMenu}>
        <Image src={images.home_vectors[18]} alt='image' className="h-auto" width={32} height={32}/>
      </button>

      {/* Responsive menu for mobile */}
      {isMenuOpen && (
        <div className="absolute top-8 p-4 right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg animate-slide-in">
          <Link href='/accomodation' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            {content.nav_accom}
          </Link>
          <Link href='/services' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            {content.nav_ser}
          </Link>
          <Link href='/surroundings' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            {content.nav_surr}
          </Link>
          <Link href='/contact' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            {content.nav_contact}
          </Link>
          <LanguageDrop />
          <button className="flex gap-1 ml-4 mt-2 block text-white text-xs py-2 px-2 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 items-center font-urbanist">
            <Image src={images.home_vectors[1]} width={12} height={12} alt='image' />
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
        <button className="hidden lg:flex gap-1 text-white text-xs py-3 px-4 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 items-center font-urbanist">
          <Image src={images.home_vectors[1]} width={12} height={12} className="h-3.5 w-3.5" alt='image' />
          {content.nav_btn}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
