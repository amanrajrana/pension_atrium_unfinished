

'use client'
import React, { useEffect, useState } from "react";
import SurroundingElement from "./SurroundingElement";
import imgAPI from "@/public/images/ImageApi"; 
import text from "../../public/text.json";

const Surroundings = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for resizing
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div>
      <p className="md:text-2x text-2xl font-bold text-center mt-8 mb-8">
          Surroundings
        </p>
      </div>
      <SurroundingElement
        heading="Trutnov city Center"
        text={text.surr_1}
        large_img={imgAPI.surr_img[6]}
        small_img={imgAPI.surr_img[0]}
        reverse={false}
      />

      <SurroundingElement
        heading="The Krkonoše Mountains National Park"
        text={text.surr_2}
        large_img={imgAPI.surr_img[7]}
        small_img={imgAPI.surr_img[1]}
        reverse={true}
      />

      <SurroundingElement
        heading="Adršpach-Teplice rocks"
        text={text.surr_3}
        large_img={imgAPI.surr_img[8]}
        small_img={imgAPI.surr_img[2]}
        reverse={false}
      />

      <SurroundingElement
        heading="Kuks"
        text={text.surr_4}
        large_img={imgAPI.surr_img[9]}
        small_img={imgAPI.surr_img[3]}
        reverse={true}
      />

      <SurroundingElement
        heading="ZOO Dvůr Králové"
        text={text.surr_5}
        large_img={imgAPI.surr_img[10]}
        small_img={imgAPI.surr_img[4]}
        reverse={false}
      />

{!isMobile && (
        <SurroundingElement
          heading="Dolce Pond"
          text={text.surr_6}
          large_img={imgAPI.surr_img[10]}
          small_img={imgAPI.surr_img[5]}
          reverse={true}
        />
      )}
    </div>
  );
};

export default Surroundings;
