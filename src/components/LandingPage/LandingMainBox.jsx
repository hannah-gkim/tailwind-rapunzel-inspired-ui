import React from "react";
import Image from "next/image";

function LandingMainBox({}) {
  return (
    <div className="flex flex-col justify-center relative">
      <Image
        width={100}
        height={100}
        src="/rapunzel-pascal-00.jpg"
        alt="rapunzel-pascal-00"
        className="h-[24rem] w-auto rounded-3xl z-0 sm:h-[20rem] md:h-[18rem] lg:h-[24rem]"
      />
      <div className="absolute w-full h-full flex justify-end items-end flex-col space-y-2 sm:p-4 md:p-5 lg:p-7 p-6">
        <h1 className="text-4xl text-white font-extrabold text-shadow-grey sm:text-4xl md:text-5xl lg:text-6xl">
          Tangled 2010
        </h1>
        <button
          className="bg-lavender text-white rounded-3xl w-[7rem] h-[1.8rem] text-lg hover:bg-opacity-80 transition duration-300 hover:text-lavender sm:block md:hidden"
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
