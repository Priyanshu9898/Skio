// Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and image container */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-purple-800 lowercase"
          >
            Skio
          </Link>
          <div className="mt-4 md:mt-0">
            <Image
              src="/homepage-cat.png"
              alt="Company"
              width={104}
              height={180}
              className="rounded object-cover"
            />
          </div>
        </div>
        {/* Navigation & Contacts */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamic section generation for Partners, Learn, Company, and Contact */}
          {["Partners", "Learn", "Company", "Contact"].map((section) => (
            <div key={section}>
              <h3 className="text-lg font-semibold">{section}</h3>
              {/* Dynamic link generation - replace with actual links */}
              <div className="mt-4 flex flex-col space-y-2">
                <Link href="/" className="text-purple-600 hover:underline">
                  Link 1
                </Link>
                <Link href="/" className="text-purple-600 hover:underline">
                  Link 2
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>
        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2023 Skio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social media links */}
            <Link href="https://twitter.com/SkioHQ" className="hover:underline">
              Twitter
            </Link>
            <Link
              href="https://linkedin.com/company/skio"
              className="hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
