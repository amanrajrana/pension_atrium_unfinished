// components/ImageGrid.js
import React from "react";

import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="flex flex-wrap mt-8 mx-4">
      {imgAPI.home_img.map((image, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/4 lg:w-1/4 xl:w-1/4 p-4 "
        >
          <Image
            width="0"
            height="0"
            sizes="100vw"
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
