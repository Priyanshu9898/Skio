import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BrandsLoveSkioProps {
  title: string;
  linkUrl: string;
  buttonText: string;
}

const BrandHeader: React.FC<BrandsLoveSkioProps> = ({
  title,
  linkUrl,
  buttonText,
}) => {
  return (
    <div className="lg:px-32 flex flex-col md:flex-row items-center justify-between p-4 w-full">
      <h2 className="text-2xl font-bold text-center md:text-left">{title}</h2>
      <Link
        href={linkUrl}
        passHref
        target="_blank"
        className="flex items-center justify-end md:justify-start px-6 py-3 text-purple-900 hover:text-purple-700 rounded-lg transition duration-300 ease-in-out relative overflow-hidden mt-4 md:mt-0"
      >
        <span>{buttonText}</span>
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          ></path>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image
            src="/assets/images/waves-purple.svg"
            alt="Decorative"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default BrandHeader;
