import React from "react";
import Image from "next/image";

function LandingMainBox({}) {
  return (
    <div className="flex flex-col justify-center relative">
      <Image
        width={100}
        height={100}
        src="./rapunzel-pascal-00.jpg"
        alt="rapunzel-pascal-00"
        className="h-[24rem] w-auto rounded-3xl z-0"
      />
      <div className="absolute w-full h-full flex justify-end items-end p-7">
        <h1 className="text-6xl text-white font-extrabold text-shadow-grey">
          Tangled 2010
        </h1>
      </div>
    </div>
  );
}

export default LandingMainBox;
