// components/SkiComponent.js
import imgAPI from "@/public/images/ImageApi";
import text from "../../public/text.json";

import ResponsiveImage from "../ResponsiveImage";
import Image from "next/image";

const SkiComponent = () => {
  const data = [
    { id: 1, icon: imgAPI.ser_vectors[10], text: "Ski park Mladé Buky (8 km)" },
    {
      id: 2,
      icon: imgAPI.ser_vectors[10],
      text: "Ski resort Černá Hora (14 km)",
    },
    {
      id: 3,
      icon: imgAPI.ser_vectors[10],
      text: "Ski area Petříkovice (9 km)",
    },
    { id: 4, icon: imgAPI.ser_vectors[10], text: "Ski area Žacléř (15 km)" },
  ];
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 items-center content-center mb-4">
      {/* Left Part with Image */}
      <div className="lg:mr-8 mb-4 lg:w-3/6 lg:h-full">
        <ResponsiveImage
          small={imgAPI.ser_img[2]}
          large={imgAPI.ser_img[5]}
          icon={imgAPI.accom_vectors[9]}
        
        />
      </div>

      {/* Right Part with SkiComponent Details */}
      <div className="lg:w-1/2 w-full mt-4 mx-4 lg:mx-0 lg:mt-0">
        <h2 className="text-2xl font-bold mb-2 mt-5 lg:mt-0">
          Ski Resorts close to Trutnov
        </h2>
        <p className="text-gray-600 ">{text.SkiComponent_txt}</p>

        <div className=" w-4/5 mt-2 lg:mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  py-2 pr-4 md:py-4  ">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex gap-4  items-center py-2 rounded"
              >
                <Image
                  src={item.icon}
                  width={32}
                  height={32}
                  
                  alt="icon"
                  className="h-6 w-6"
                  
                />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkiComponent;
