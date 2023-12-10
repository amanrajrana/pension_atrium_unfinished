// components/SurroundingElement.js
import Image from "next/image";

const SurroundingElement = ({ isReverse, large_img, heading, text }) => {
  return (
    <div
      className={`${
        isReverse ? "flex-wrap-reverse" : "flex-wrap"
      } p-2 md:p-10 flex gap-x-14 gap-y-4 lg:flex-nowrap 3xl:gap-x-28`}
    >
      {isReverse ? (
        <>
          <ContainerText heading={heading} text={text} />
          <ContainerImage image={large_img} />
        </>
      ) : (
        <>
          <ContainerImage image={large_img} />
          <ContainerText heading={heading} text={text} />
        </>
      )}
    </div>
  );
};

export default SurroundingElement;

const ContainerImage = ({ image }) => {
  return (
    <div className="w-full lg:w-1/2">
      <Image
        src={image}
        width={573}
        height={350}
        sizes="100vw"
        alt="img"
        className="w-full"
      />
    </div>
  );
};

const ContainerText = ({ heading, text }) => {
  return (
    <div className="flex justify-center flex-col gap-2 lg:gap-y-6 w-full lg:w-1/2">
      <h2 className="font-bold text-2xl-custom sm:text-[30px] 3xl:text-5xl text-center sm:text-left">
        {heading}
      </h2>
      <p className="text-[#717171] text-sm sm:text-lg sm:leading-7 3xl:text-2xl">
        {text}
      </p>
    </div>
  );
};
