import Floor from "@/Components/accommodation/Floor";
import Tables from "@/Components/accommodation/Tables Section/Tables";
import React from "react";
import text from "@/public/text.json";
import Information from "@/Components/accommodation/Information";
import Main from "@/Components/common/Main";
import { H1 } from "@/Components/common/Headings";

export default function Page() {
  return (
    <Main>
      <H1 className="text-center">Our Accommodation</H1>
      <Tables />
      <Floor heading="Ground Floor" desc={text.first_floor} />
      <Floor heading="First Floor" desc={text.ground_floor} />
      <Information />
    </Main>
  );
}
