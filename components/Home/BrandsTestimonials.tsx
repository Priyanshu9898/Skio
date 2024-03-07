"use client";

import React from "react";
import BrandHeader from "../shared/BrandHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ThreeDCard from "../shared/ThreeDCard";

const BrandsTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <BrandHeader
        title="brands make more money with Skio"
        linkUrl="https://apps.shopify.com/skio/reviews?ratings%5B%5D=5&sort_by=newest"
        buttonText="See Case Studies"
      />
       
      <div className="lg:px-32 slider-container overflow-hidden">
        <Slider {...settings}>
          <ThreeDCard
            imageUrl="/assets/images/mila11.jpg"
            title=""
            bodyText="The XCJ: Effective Subscriptions for Hypergrowth"
          />
          <ThreeDCard
            imageUrl="/assets/images/mila.svg"
            title=""
            bodyText="The XCJ: Effective Subscriptions for Hypergrowth"
          />
          <ThreeDCard
            imageUrl="/assets/images/mila.svg"
            title=""
            bodyText="The XCJ: Effective Subscriptions for Hypergrowth"
          />
          <ThreeDCard
            imageUrl="/assets/images/mila.svg"
            title=""
            bodyText="The XCJ: Effective Subscriptions for Hypergrowth"
          />
          <ThreeDCard
            imageUrl="/assets/images/mila.svg"
            title=""
            bodyText="The XCJ: Effective Subscriptions for Hypergrowth"
          />
          <ThreeDCard
            imageUrl="/assets/images/mila.svg"
            title=""
            bodyText="The XCJ: Effective Subscriptions for Hypergrowth"
          />
        </Slider>
      </div>
    </>
  );
};

export default BrandsTestimonials;
