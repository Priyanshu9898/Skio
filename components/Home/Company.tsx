"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const companyLogos = [
  { src: "/assets/images/logo1.png", width: 120, height: 80 },
  { src: "/assets/images/logo3.png", width: 120, height: 80 },
  { src: "/assets/images/logo9.png", width: 120, height: 80 },
  { src: "/assets/images/logo4.png", width: 120, height: 80 },
  { src: "/assets/images/logo6.png", width: 120, height: 80 },
  { src: "/assets/images/logo8.png", width: 120, height: 80 },
  { src: "/assets/images/logo7.png", width: 120, height: 80 },
  { src: "/assets/images/logo1.png", width: 120, height: 80 },
  { src: "/assets/images/logo3.png", width: 120, height: 80 },
  { src: "/assets/images/logo9.png", width: 120, height: 80 },
  { src: "/assets/images/logo4.png", width: 120, height: 80 },
  { src: "/assets/images/logo6.png", width: 120, height: 80 },
  { src: "/assets/images/logo8.png", width: 120, height: 80 },
  { src: "/assets/images/logo7.png", width: 120, height: 80 },
  { src: "/assets/images/logo1.png", width: 120, height: 80 },
  { src: "/assets/images/logo3.png", width: 120, height: 80 },
  { src: "/assets/images/logo9.png", width: 120, height: 80 },
  { src: "/assets/images/logo4.png", width: 120, height: 80 },
  { src: "/assets/images/logo6.png", width: 120, height: 80 },
  { src: "/assets/images/logo8.png", width: 120, height: 80 },
  { src: "/assets/images/logo7.png", width: 120, height: 80 },
  { src: "/assets/images/logo1.png", width: 120, height: 80 },
  { src: "/assets/images/logo3.png", width: 120, height: 80 },
  { src: "/assets/images/logo9.png", width: 120, height: 80 },
  { src: "/assets/images/logo4.png", width: 120, height: 80 },
  { src: "/assets/images/logo6.png", width: 120, height: 80 },
  { src: "/assets/images/logo8.png", width: 120, height: 80 },
  { src: "/assets/images/logo7.png", width: 120, height: 80 },
  { src: "/assets/images/logo1.png", width: 120, height: 80 },
  { src: "/assets/images/logo3.png", width: 120, height: 80 },
  { src: "/assets/images/logo9.png", width: 120, height: 80 },
  { src: "/assets/images/logo4.png", width: 120, height: 80 },
  { src: "/assets/images/logo6.png", width: 120, height: 80 },
  { src: "/assets/images/logo8.png", width: 120, height: 80 },
  { src: "/assets/images/logo7.png", width: 120, height: 80 },
];

const Company = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="text-center lg:text-left max-w-screen-xl mx-auto px-4 text-[24px] font-semibold lg:mt-[-48px]">
        trusted by 1029+ brands
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-8"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-7 gap-4"
            variants={containerVariants}
          >
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-2"
                variants={itemVariants}
              >
                <div style={{ maxWidth: "120px", maxHeight: "80px" }}>
                  <Image
                    src={logo.src}
                    alt={`Company Logo ${index + 1}`}
                    width={80}
                    height={60}
                    objectFit="contain"
                    layout="responsive"
                    style={{ height: "60px !important", objectFit: "contain" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Company;
