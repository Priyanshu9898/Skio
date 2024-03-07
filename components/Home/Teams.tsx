"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const users = [
  {
    name: "Kennan Davison",
    designation: "Founder, CEO",
    image: "/assets/images/team1.jpg",
    badge: "Founder",
  },
  {
    name: "Aidan Thibodeaux",
    designation: "COO",
    image: "/assets/images/team2.jpeg",
    badge: "COO",
  },
  {
    name: "Andrew Chen",
    designation: "Founding Engineer, Engineering Lead",
    image: "/assets/images/team3.jpeg",
    badge: "Lead",
  },
  {
    name: "Arvin Rezvanpour",
    designation: "Founding Engineer",
    image: "/assets/images/team4.jpeg",
    badge: "Lead",
  },
  {
    name: "Nathan Wong",
    designation: "Founding Engineer",
    image: "/assets/images/team5.jpg",
    badge: "Mentor",
  },
  {
    name: "Matt Davison",
    designation: "Founding Engineer",
    image: "/assets/images/team6.jpeg",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];

const Teams = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          users={users}
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                make more money by partnering with <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  The best engineering team
                </span>
              </h1>
            </>
          }
        />
      </div>
    </>
  );
};

export default Teams;
