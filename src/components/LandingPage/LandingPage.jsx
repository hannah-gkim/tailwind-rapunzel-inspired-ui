"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import LandingMainBox from "./LandingMainBox";
import LandingLeftBox from "./LandingLeftBox";
import LandingRightBox from "./LandingRightBox";

function LandingPage({ data }) {
  return (
    <div className="relative bg-white rounded-3xl py-5 px-8 w-[60rem]">
      <Navbar />
      <LandingMainBox />
      <div className="flex ">
        <LandingLeftBox data={data} />
        <LandingRightBox data={data} />
      </div>
    </div>
  );
}

export default LandingPage;
