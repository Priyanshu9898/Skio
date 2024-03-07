import Company from "@/components/Home/Company";
import HeroSection from "@/components/Home/HeroSection";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-[#efe1f6]">
        <HeroSection />
        <Company />
        <Testimonials />
      </div>
    </>
  );
};

export default page;
