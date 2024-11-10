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
    <nav className="absolute top-12 pl-6 flex items-center z-10 space-x-6">
      <Link href={"/"}>
        <Image
          width={100}
          height={100}
          src="/rapunzel-logo.gif"
          alt="rapunzel-logo"
          className="w-[2.5rem] rounded-full bg-white hover:bg-lavender p-1.5"
        />
      </Link>
      <div className="bg-white rounded-3xl px-6 py-1.5" id="navbar">
        <ul className="flex space-x-8 text-1.5xl">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="py-1 px-3 rounded-full hover:text-white hover:bg-lavender"
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
