import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const SellCard = () => {
  return (
    <>
      <Card className="w-[900px] text-center">
        <CardHeader>
          <CardTitle className="text-[40px]">
            ready to sell subscriptions without ripping your hair out?
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-center gap-x-4">
          <div className="mt-4">
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
          <div className="mt-4">
            <Link
              href="/demo"
              className="cursor-pointer inline-flex bottom-2 border border-purple-500 lowercase items-center px-4 py-2 bg-purple-100 text-[#200039] font-medium text-lg rounded-[200px] hover:bg-purple-200"
            >
              Meet The Team
              <Image
                src="/assets/images/primary-button-arrow-right-purple.svg"
                width={24}
                height={24}
                alt=""
                className="ml-2 w-5 h-5"
              />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SellCard;
