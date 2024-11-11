"use client";
import React from "react";
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
      <div className="flex ">
        <LandingLeftBox data={data} />
        <LandingRightBox data={data} />
      </div>
    </WhiteContainer>
  );
}

export default LandingPage;
