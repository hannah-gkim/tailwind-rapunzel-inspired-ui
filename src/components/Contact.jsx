"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteContainer from "./WhiteContainer";
import { Github, Home, Linkedin } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    path: "#",
  },
  ,
  {
    title: "Pascal",
    path: "#pascal",
  },
  {
    title: "Rapunzel",
    path: "#rapunzel",
  },
];

export default function Contact() {
  return (
    <WhiteContainer className="py-[3rem] flex" id="contact">
      {/* left box */}
      <Link href={"/"} className="w-[20%]">
        <Image
          id="/"
          width={100}
          height={100}
          src="/rapunzel-logo.gif"
          alt="landing-page"
          className="rounded-3xl bg-white hover:bg-lavender hover:bg-opacity-60 p-1.5 w-[8rem] lg:w-[8rem] md:w-[7rem] "
        />
      </Link>
      {/* mid box */}
      <div className="w-[20%] flex flex-col justify-center">
        <ul className="text-base sm:text-lg lg:text-1.5xl space-y-3">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="py-2 px-3 rounded-full hover:text-white hover:bg-lavender"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* right box */}
      <div className="w-[60%] flex flex-col space-y-2 items-end justify-center">
        <p className="flex justify-center items-center pt-3 text-base w-[10rem] sm:text-1.5xl lg:w-[10rem] md:text-lg md:w-[9rem]">
          Connect With Me
        </p>
        <div className="flex justify-center items-center w-[10rem] md:w-[9rem] lg:w-[10rem] space-x-2">
          <Link
            href="https://github.com/hannah-gkim"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/hannah-gkim",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <Github
              className="w-[2.5rem] lg:w-[3rem] sm:w-[2.5rem] h-auto rounded-3xl bg-lavender hover:opacity-50 p-2 text-white"
              strokeWidth={1.5}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hannah-gkim/"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/hannah-gkim/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <Linkedin
              className="w-[2.5rem] lg:w-[3rem] sm:w-[2.5rem] h-auto rounded-3xl bg-lavender hover:opacity-50 p-2 text-white"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </WhiteContainer>
  );
}
