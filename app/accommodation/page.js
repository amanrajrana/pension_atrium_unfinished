import Floor from "@/Components/Floor";
import Tables from "@/Components/Tables Section/Tables";
import React from "react";
import text from "@/public/text.json";
import Information from "@/Components/Information";
import Main from "@/Components/common/Main";

export default function Page() {
  return (
    <Main>
      <h1 className="text-center font-bold text-4xlg lg:text-3xlg">
        Our Accommodation
      </h1>
      <Tables />
      <Floor heading="Ground Floor" desc={text.first_floor} />
      <Floor heading="First Floor" desc={text.ground_floor} />
      <Information />
    </Main>
  );
}
