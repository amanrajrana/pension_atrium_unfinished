'use client'
import React, { useEffect, useState } from "react";
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";

const Amenities = () => {
  const data = [
    { icon: imgAPI.home_vectors[4], text: "Free wi-fi" },
    { icon: imgAPI.home_vectors[5], text: "Garden with playground" },
    { icon: imgAPI.home_vectors[6], text: "Beds from 200 Kč (8 €) per night" },
    { icon: imgAPI.home_vectors[7], text: "Free parking" },
    { icon: imgAPI.home_vectors[8], text: "Wheelchair accessible" },
    { icon: imgAPI.home_vectors[9], text: "Close to the bus terminal and train station." },
    { icon: imgAPI.home_vectors[10], text: "Group discounts and long stay discounts" },
    { icon: imgAPI.home_vectors[11], text: "Kitchen and meeting room with TV" },
  ];

  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(window.innerWidth < 1000 ? 2 : 4);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Split the data into rows
  const rows = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    rows.push(data.slice(i, i + itemsPerRow));
  }

  return (
    <div className="container mx-auto my-16 text-center">
      <h1 className="text-2x font-bold mb-12">Our Amenities</h1>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-10 lg:10 flex-wrap justify-center mb-4 ${
            rowIndex > 0 ? "mt-8" : "" // Add top margin for rows after the first one
          }`}
        >
          {row.map((item, index) => (
            <div key={index} className="w-40 flex-col justify-center p-4">
              <Image width={70} height={46} src={item.icon} alt={`Icon ${index + rowIndex * itemsPerRow + 1}`} className="mx-auto w-auto  h-auto" />
              <p className="mx-auto text-center font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Amenities;
