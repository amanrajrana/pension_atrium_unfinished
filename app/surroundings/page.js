import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Surroundings from "@/Components/Surroundings Section/Surroundings";

import React from "react";

const page = () => {
  return (
    <div className="font-urbanist">
      <Navbar />
     <Surroundings/>
      <Footer />
    </div>
  );
};
export default page;
