import BrandsTestimonials from "@/components/Home/BrandsTestimonials";
import Company from "@/components/Home/Company";
import HeroSection from "@/components/Home/HeroSection";
import Teams from "@/components/Home/Teams";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-[#efe1f6]">
        <HeroSection />
        <Company />
        <Testimonials />
        <BrandsTestimonials />
        <Teams />
      </div>
    </>
  );
};

export default page;
