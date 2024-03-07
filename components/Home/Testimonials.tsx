"use client";

import React from "react";
import BrandHeader from "../shared/BrandHeader";
import CardComponent from "../shared/CardComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Testimonials = () => {
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
        title="Brands Love Skio"
        linkUrl="https://apps.shopify.com/skio/reviews?ratings%5B%5D=5&sort_by=newest"
        buttonText="View Shopify App Store Reviews"
      />
      <div className="lg:px-32 slider-container overflow-hidden">
        <Slider {...settings}>
          <CardComponent
            logoSrc="/assets/images/brand1.png"
            starsSrc="/assets/images/star.png"
            content="The team at Skio has been so amazing! I cannot begin to explain how helpful they are with customizations and problem fixes. You never see that with any technology company. Every promise they made when we signed on has been honored/delivered on and that is so impressive and rare. By far the best subscription partner for anybody on Shopify."
            authorImageSrc="/assets/images/people1.png"
            authorName="Nevin Jethmalani"
            authorRole="Fractional CMO at Dr. Brandt"
          />
          <CardComponent
            logoSrc="/assets/images/brand1.png"
            starsSrc="/assets/images/star.png"
            content="The team at Skio has been so amazing! I cannot begin to explain how helpful they are with customizations and problem fixes. You never see that with any technology company. Every promise they made when we signed on has been honored/delivered on and that is so impressive and rare. By far the best subscription partner for anybody on Shopify."
            authorImageSrc="/assets/images/people1.png"
            authorName="Nevin Jethmalani"
            authorRole="Fractional CMO at Dr. Brandt"
          />
          <CardComponent
            logoSrc="/assets/images/brand1.png"
            starsSrc="/assets/images/star.png"
            content="The team at Skio has been so amazing! I cannot begin to explain how helpful they are with customizations and problem fixes. You never see that with any technology company. Every promise they made when we signed on has been honored/delivered on and that is so impressive and rare. By far the best subscription partner for anybody on Shopify."
            authorImageSrc="/assets/images/people1.png"
            authorName="Nevin Jethmalani"
            authorRole="Fractional CMO at Dr. Brandt"
          />
          <CardComponent
            logoSrc="/assets/images/brand1.png"
            starsSrc="/assets/images/star.png"
            content="The team at Skio has been so amazing! I cannot begin to explain how helpful they are with customizations and problem fixes. You never see that with any technology company. Every promise they made when we signed on has been honored/delivered on and that is so impressive and rare. By far the best subscription partner for anybody on Shopify."
            authorImageSrc="/assets/images/people1.png"
            authorName="Nevin Jethmalani"
            authorRole="Fractional CMO at Dr. Brandt"
          />
          <CardComponent
            logoSrc="/assets/images/brand1.png"
            starsSrc="/assets/images/star.png"
            content="The team at Skio has been so amazing! I cannot begin to explain how helpful they are with customizations and problem fixes. You never see that with any technology company. Every promise they made when we signed on has been honored/delivered on and that is so impressive and rare. By far the best subscription partner for anybody on Shopify."
            authorImageSrc="/assets/images/people1.png"
            authorName="Nevin Jethmalani"
            authorRole="Fractional CMO at Dr. Brandt"
          />
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
