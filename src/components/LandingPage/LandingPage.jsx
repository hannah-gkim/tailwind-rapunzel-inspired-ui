"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import LandingMainBox from "./LandingMainBox";
import LandingLeftBox from "./LandingLeftBox";
import LandingRightBox from "./LandingRightBox";
import WhiteContainer from "../WhiteContainer";

function LandingPage({ data }) {
  return (
    <WhiteContainer>
      <Navbar />
      <LandingMainBox />
      {/* landing left box in sm screens */}
      <div className="flex w-full">
        <div className="pt-[4rem] sm:pt-4 sm:blcok md:hidden space-y-4">
          <div className="w-[5rem] sm:w-[9rem]">
            <Image
              src="/rapunzel-pascal-01.jpg"
              width={60}
              height={60}
              className="rounded-3xl w-full"
              alt="rapunzel-pascal-01"
            />
          </div>
          <div className="w-[5rem] sm:w-[9rem]">
            <Image
              src="/rapunzel-pascal-02.jpg"
              width={60}
              height={60}
              className="rounded-3xl w-full"
              alt="rapunzel-pascal-02"
            />
          </div>
        </div>
        <LandingLeftBox data={data} />
        <LandingRightBox data={data} />
      </div>
    </WhiteContainer>
  );
}

export default LandingPage;
