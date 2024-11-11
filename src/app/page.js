import React from "react";
import LandingPage from "@/components/LandingPage/LandingPage";
import PascalPage from "../components/PascalPage";
// import Contact from "@/components/Contact";
import Lantern from "./Lantern";
import data from "@/data/data";

export default function Home() {
  return (
    <main className="text-lavender flex flex-col justify-center items-center bg-lavender pb-9 space-y-9">
      {[...Array(20)].map((_, i) => (
        <Lantern
          key={i}
          delay={Math.random() * 5} // Random delay for staggered animation
          leftPosition={Math.random() * 100} // Random horizontal position
        />
      ))}
      <LandingPage data={data} />
      <PascalPage data={data} />
      {/* <Contact /> */}
    </main>
  );
}
