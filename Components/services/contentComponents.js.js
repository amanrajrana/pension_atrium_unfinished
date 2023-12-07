import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import GalleryIcon from "@/Components/common/GalleryIcon";

export const Section = ({ children }) => {
  return (
    <section className="flex flex-col gap-16 items-center lg:flex-row">
      {children}
    </section>
  );
};

export const ContentContainer = ({ children }) => {
  return (
    <div className="space-y-4 w-full flex-1 text-[#414141] text-sm lg:text-lg 3xl:text-2xl ">
      {children}
    </div>
  );
};

export const ResponsiveImage = ({ image, alt }) => {
  return (
    <div className="relative w-full rounded-md overflow-clip lg:min-w-max lg:w-fit">
      <Image
        src={image}
        height={400}
        width={480}
        alt={alt || "image"}
        className="w-full lg:w-[480px] object-cover 3xl:w-[600px]"
      />
      <GalleryIcon />
    </div>
  );
};

ResponsiveImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export const H2 = ({ children }) => {
  return <h2 className="text-2xl-custom font-bold text-black 3xl:text-3xl">{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

const props = {
  children: PropTypes.node.isRequired,
};

Section.propTypes = props;
ContentContainer.propTypes = props;
H2.propTypes = props;
