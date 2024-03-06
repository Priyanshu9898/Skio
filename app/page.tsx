import Company from "@/components/Home/Company";
import HeroSection from "@/components/Home/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-[#efe1f6]">
        <HeroSection />
        <Company />
      </div>
    </>
  );
};

export default page;
