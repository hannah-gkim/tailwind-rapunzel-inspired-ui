import React from "react";
import LandingPage from "@/components/LandingPage/LandingPage";
import PascalPage from "../components/PascalPage";
import Contact from "@/components/Contact";
import Lantern from "./Lantern";
import data from "@/data/data";

export default function Home() {
  return (
    // sm:bg-red-200 md:bg-blue-100 lg:bg-green-100
    <main className="text-lavender flex flex-col justify-center items-center bg-lavender pb-4 space-y-4 pl-4 pr-4 sm:space-y-4 sm:pb-4 sm:pl-4 sm:pr-4 md:space-y-6 md:pb-6 md:pl-8 md:pr-8 lg:space-y-9 lg:pb-9 w-[100%] sm:bg-red-200 md:bg-blue-100 lg:bg-green-100">
      {[...Array(20)].map((_, i) => (
        <Lantern
          key={i}
          delay={Math.random() * 5} // Random delay for staggered animation
          leftPosition={Math.random() * 100} // Random horizontal position
        />
      ))}
      <LandingPage data={data} />
      <PascalPage data={data} />
      <Contact />
    </main>
  );
}
