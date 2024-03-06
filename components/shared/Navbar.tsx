import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-[1000] bg-transparent text-[#200039] p-4 h-[64px]">
        <div className="flex items-center justify-between px-4 xl:px-32">
          <div className="">
            <Link href="/" passHref>
              <div className="lowercase">
                <h1 className="font-ui-sans-serif font-bold text-4xl select-none text-purple-900">
                  Skio
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-12">
            <Link
              href="/team"
              className="text-purple-900 text-[20px] lowercase font-bold hover:text-purple-700"
            >
              Team
            </Link>
            <Link
              href="/pricing"
              className="text-purple-900 text-[20px] lowercase font-bold hover:text-purple-700"
            >
              Pricing
            </Link>
            <Link
              href="/products"
              className="text-purple-900 text-[20px] lowercase font-bold hover:text-purple-700"
            >
              Products
            </Link>
            <Link
              href="/story"
              className="text-purple-900 text-[20px] lowercase font-bold hover:text-purple-700"
            >
              Story
            </Link>
            <Link
              href="/resources"
              className="text-purple-900 text-[20px] lowercase font-bold hover:text-purple-700"
            >
              Resources
            </Link>
            <Link
              href="/company"
              className="text-purple-900 text-[20px] lowercase font-bold hover:text-purple-700"
            >
              Company
            </Link>
          </div>
          <div>
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
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
