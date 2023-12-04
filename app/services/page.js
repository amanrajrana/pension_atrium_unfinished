import MealsComponent from "@/Components/Services Section/MealsComponent";
import SkiComponent from "@/Components/Services Section/SkiComponent";
import Sports from "@/Components/Services Section/Sports";
import React from "react";

const page = () => {
  return (
    <main className="font-urbanist">
      <MealsComponent />
      <Sports />
      <SkiComponent />
    </main>
  );
};
export default page;
