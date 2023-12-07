import React from "react";
import text from "../public/text.json";
const Information = () => {
  const { Info_t2 } = text;

  // Split the text into an array of words
  const words = Info_t2.split(" ");
  return (
    <div className="mt-10 w-full">
      <div className="text-2xl-custom font-bold mb-6">{text.Info}</div>
      <div className="text-sm mb-4">{text.Info_t1}</div>
      <div className="mb-4">
        {words.map((word, index) => (
          <span
            key={index}
            className={word === "20CZK" ? "text-customblue font-bold" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Information;
