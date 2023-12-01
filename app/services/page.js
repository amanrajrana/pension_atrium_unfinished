import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import MealsComponent from "@/Components/Services Section/MealsComponent";
import SkiComponent from "@/Components/Services Section/SkiComponent";
import Sports from "@/Components/Services Section/Sports";
import React from "react";

const page = () => {
  return (
    <div className="font-urbanist">
      <Navbar />
      <MealsComponent />
      <Sports />
      <SkiComponent />
      <Footer />
    </div>
  );
};
export default page;
