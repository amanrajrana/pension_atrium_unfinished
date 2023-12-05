import Image from "next/image";
import React from "react";
import { TbPhoto } from "react-icons/tb";
import GalleryIcon from "./common/GalleryIcon";

const ImageEffect = ({ img1, img2 }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        width={400}
        height={350}
        sizes="100vw"
        src={img1}
        alt="Background"
        className=" w-full  h-auto"
      />

      {/* Icon at Bottom Left Corner */}
      <GalleryIcon />
    </div>
  );
};

export default ImageEffect;
