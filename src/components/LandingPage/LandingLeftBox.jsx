import React from "react";
import Image from "next/image";

function LandingLeftBox({ data }) {
  return (
    <>
      {/* left box */}
      {/* sm:flex sm:flex-row sm:items-center sm:justify-between */}
      <div className="p-5 space-y-2 basis-[30%] md:flex md:flex-col md:space-y-3 md:basis-[26%] lg:basis-[30%] lg:space-y-2 hidden sm:hidden md:block">
        <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
          {data[0].name}
        </p>
        <p className="text-lg md:text-base lg:text-lg">{data[0].description}</p>
        <div className="w-[11rem] sm:w-[8rem] md:w-[7rem] lg:w-[11rem]">
          <Image
            src="./rapunzel-pascal-01.jpg"
            width={60}
            height={60}
            className="rounded-3xl w-full"
            alt="rapunzel-pascal-01"
          />
        </div>
      </div>
      {/* right box */}
      <div className="p-5 space-y-3 flex flex-col justify-between md:basis-[22%] basis-[20%] lg:basis-[20%] hidden sm:hidden md:block">
        <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
          {data[1].name}
        </p>
        <div className="w-[9rem] md:w-[8rem] lg:w-[9rem]">
          <Image
            src="./rapunzel-pascal-02.jpg"
            width={60}
            height={60}
            className="rounded-3xl w-full"
            alt="rapunzel-pascal-02"
          />
        </div>
        <div>
          <button
            className="bg-lavender text-white rounded-3xl w-[9rem] h-[2rem] text-xl hover:bg-opacity-50 transition duration-300 hover:text-lavender md:w-[7.5rem] lg:w-[9rem]"
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
    </>
  );
}

export default LandingLeftBox;
