"use client";

// Assuming "use client" is part of your environment setup
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const imagePaths = [
  "/assets/images/img1.png",
  "/assets/images/img2.png",
  "/assets/images/img3.png",
  "/assets/images/homepage-cat.png",
  "/assets/images/img4.png",
  "/assets/images/img5.png",
  "/assets/images/img6.png",
  "/assets/images/img7.png",
  "/assets/images/img8.png",
  "/assets/images/img9.png",
  "/assets/images/img10.png",
];

const HeroSection = () => {
  // Text animation definition
  const textAnimation = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  // Floating animation definition for images
  const floatingAnimation = () => ({
    y: [0, -20, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: Math.random() * 5 + 2,
        ease: "easeInOut",
      },
    },
  });

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-start lg:justify-between text-[#200039]">
      {/* Background Image - Ensure it covers the entire section */}
      <Image
        src="/assets/images/hero.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className="hidden lg:block absolute z-0"
      />
      {/* Text Section */}
      <div className="mt-32 z-10 p-4 lg:px-28 lg:w-1/2 space-y-4">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={textAnimation}
        >
          <h1 className="text-4xl lg:text-6xl lowercase font-bold">
            Sell subscriptions without ripping your hair out
          </h1>
          <p>
            <span className="text-yellow-500">★★★★★</span> 5.0 (172 reviews)
          </p>
          <p className="text-[20px] font-normal">
            Skio is trusted by brands like Liquid I.V., Bulletproof, Milk Bar, Barstool Sports, Unilever, Vega, KOS, KITSCH, True Botanicals, Wild One, GHOST, Raw Nutrition, RYSE Supplements, about-face, & KraveBeauty.
          </p>
          <div className="mt-6">
            <Link
              href="/demo"
              className="cursor-pointer inline-flex bottom-2 border border-purple-500 lowercase items-center px-4 py-2 bg-purple-100 text-[#200039] font-medium text-lg rounded-[200px] hover:bg-purple-200"
            >
              Request Demo
              <Image
                src="/assets/images/primary-button-arrow-right-purple.svg"
                width={24}
                height={24}
                alt=""
                className="ml-2 w-5 h-5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Images Section */}
      <div className="z-10 mt-8 flex flex-wrap justify-center lg:justify-start items-center w-full lg:w-1/2  lg:mt-32">
        {imagePaths.map((path, index) => (
          <motion.div
            key={`${path}-${index}`}
            className="p-2"
            animate={floatingAnimation()}
          >
            <Image
              src={path}
              alt={`Floating image ${index}`}
              width={110}
              height={100}
              layout="intrinsic"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
