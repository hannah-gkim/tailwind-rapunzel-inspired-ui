"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const navLinks = [
  {
    title: "Pascal",
    path: "#pascal",
  },
  {
    title: "Rapunzel",
    path: "#rapunzel",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="absolute z-10 lg:top-12 lg:pl-6 lg:space-x-6  md:top-9 md:pl-3 md:space-x-3 sm:top-8 sm:pl-4 sm:space-x-3 items-center flex  top-12  pl-6  space-x-6">
      <Link href={"/"}>
        <Image
          width={100}
          height={100}
          src="/rapunzel-logo.gif"
          alt="rapunzel-logo"
          className="rounded-full bg-white hover:bg-lavender w-[2.5rem] p-1.5 sm:w-[2rem] sm:p-1 lg:w-[2.5rem] lg:p-1.5 md:w-[2rem] md:p-1 hidden sm:block"
        />
      </Link>
      <div
        className="bg-white rounded-3xl px-6 py-1.5 sm:px-4 sm:py-1.5 lg:px-6 lg:py-1.5 md:px-4 md:py-1 hidden sm:block"
        id="navbar"
      >
        <ul className="flex space-x-8 sm:space-x-4 sm:text-sm lg:space-x-8 lg:text-1.5xl md:space-x-3 md:text-base">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="rounded-full hover:text-white hover:bg-lavender py-0 px-1.5 sm:px-2 sm:py-1 lg:py-1 lg:px-3 md:py-0.5 md:px-2 sm:text-sm lg:text-lg md:text-base"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
