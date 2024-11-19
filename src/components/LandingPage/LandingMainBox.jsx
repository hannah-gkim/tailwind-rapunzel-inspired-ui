import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import DropdownNav from "../Navbar/DropdownNav";

function LandingMainBox({}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col justify-center relative">
      <Image
        width={100}
        height={100}
        src="./rapunzel-pascal-00.jpg"
        alt="rapunzel-pascal-00"
        className="h-[14rem] w-auto rounded-3xl z-0 sm:h-[20rem] md:h-[18rem] lg:h-[24rem]"
      />

      <div className="absolute w-full flex justify-end h-full p-3 sm:hidden ">
        {isOpen ? (
          <X
            onClick={handleMenu}
            className="sm:hidden  w-[2.5rem] h-[2rem] hover:opacity-80 hover:cursor-pointer text-white z-20 "
            strokeWidth={2}
          />
        ) : (
          <Menu
            onClick={handleMenu}
            className="sm:hidden  w-[2.5rem] h-[2rem] hover:opacity-80 hover:cursor-pointer text-white z-20 "
            strokeWidth={3}
          />
        )}
        <DropdownNav isOpen={isOpen} />
      </div>

      <div className="absolute w-full h-full flex justify-end items-end flex-col space-y-2 sm:p-4 md:p-5 lg:p-7 p-4 sm:p-6">
        <h1 className="text-2xl text-white font-extrabold text-shadow-grey sm:text-4xl md:text-5xl lg:text-6xl">
          Tangled 2010
        </h1>
        <button
          className="bg-lavender text-white rounded-3xl w-[5.5rem] h-[1.5rem]  text-base  sm:text-lg  sm:w-[7rem] sm:h-[1.8rem] hover:bg-opacity-80 transition duration-300 hover:text-lavender sm:block md:hidden"
          onClick={() => {
            const element = document.getElementById("pascal");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LandingMainBox;
