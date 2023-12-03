// components/ImageGrid.js
import React from "react";

import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 flex-wrap mt-8 mx-4 max-w-screen-xl lg:mx-auto">
      {imgAPI.home_img.map((image, index) => (
        <Image
          width="0"
          height="0"
          sizes="100vw"
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-auto rounded"
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
