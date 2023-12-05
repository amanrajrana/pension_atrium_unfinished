// components/ImageGrid.js
import React from "react";

import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 flex-wrap mt-4 mx-auto max-w-screen-2xl px-4 lg:px-6 gap-4">
      {imgAPI.home_img.map((image, index) => (
        <Image
          width="836"
          height="418"
          sizes="100vw"
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-full rounded-xl object-cover"
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
