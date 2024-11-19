"use client";
import React from "react";
import Image from "next/image";
import RapunzelPage from "./RapunzelPage";
import WhiteContainer from "./WhiteContainer";

function PascalPage({ data }) {
  return (
    <WhiteContainer className="pt-10" id="pascal">
      {/* top title  */}
      <div className="flex flex-col px-10 md:px-0 sm:flex-row md:flex-row lg:flex-row space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-8 lg:space-x-8 justify-between items-center">
        <p className="text-3xl sm:text-3xl lg:text-6xl md:text-5xl">
          {data[5].name}
        </p>
        <p className="w-full sm:w-[24rem] sm:text-sm md:text-base md:w-[28rem] lg:w-[28rem]">
          {data[5].description}
        </p>
        <div>
          <button
            className="bg-lavender text-white rounded-3xl  w-[5.5rem] h-[1.5rem]  text-base  sm:text-lg  sm:w-[7rem] sm:h-[1.8rem] md:text-xl  md:h-[2rem] md:w-[7.5rem] lg:w-[9rem] hover:bg-opacity-50 transition duration-300 hover:text-lavender"
            onClick={() => {
              const element = document.getElementById("rapunzel");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
      {/* pascal images */}
      <div className="relative flex flex-col space-y-5 pt-10 sm:space-y-0 sm:flex-row sm:space-x-5 pt-6 h-[26rem] lg:h-[26rem] md:h-[22rem]">
        <div className="flex space-x-5">
          {/* pascal 1 */}
          <div className="w-[38%]">
            <div className="absolute w-[36%] sm:w-[17%] md:w-[17%] lg:w-[18%] flex flex-col items-center mt-2 sm:mt-3 md:mt-2 lg:mt-5">
              <h1 className="text-white font-extrabold text-shadow-grey z-10 text-xl sm:text-lg md:text-1.5xl lg:text-3xl">
                {data[0].name}
              </h1>
            </div>
            <Image
              src="/pascal-02.jpg"
              width={200}
              height={200}
              alt="pascal-02"
              className="rounded-3xl h-[16rem] lg:h-[24rem] md:h-[18rem] w-full"
            />
          </div>
          {/* pascal 2 */}
          <div className="w-[62%]">
            <Image
              src="/pascal-00.jpg"
              width={200}
              height={200}
              alt="pascal-00"
              className="rounded-3xl h-[16rem] lg:h-[24rem] md:h-[18rem] w-full"
            />
            <div className="absolute w-[58%] sm:w-[28%] md:w-[28%] lg:w-[29%] flex flex-col items-center">
              <h1 className="text-white font-extrabold text-shadow-grey z-10 text-xl sm:text-lg lg:text-3xl md:text-1.5xl -mt-10 sm:-mt-11 md:-mt-10 lg:-mt-16">
                {data[1].name}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-5">
          {/* pascal 3 */}
          <div className="w-[60%]">
            <div className="absolute w-[57%] sm:w-[26%] md:w-[27%] lg:w-[29%] flex flex-col items-center">
              <h1 className="text-white font-extrabold text-shadow-grey z-10 text-xl sm:text-lg  lg:text-3xl md:text-1.5xl mt-2 sm:mt-3 md:mt-2 lg:mt-5">
                {data[2].name}
              </h1>
            </div>
            <Image
              src="/pascal-01.jpg"
              width={200}
              height={200}
              alt="pascal-01"
              className="rounded-3xl h-[16rem] lg:h-[24rem] md:h-[18rem] w-full"
            />
          </div>
          {/* pascal 4 */}
          <div className="w-[40%]">
            <Image
              src="/pascal-03.jpg"
              width={200}
              height={200}
              alt="pascal-03"
              className="rounded-3xl h-[16rem] lg:h-[24rem] md:h-[18rem] w-full"
            />
            <div className="absolute w-[38%] md:w-[18%] sm:w-[18%] md:w-[18%] lg:w-[18%] flex flex-col items-center">
              <h1 className="text-white font-extrabold text-shadow-grey z-10 text-xl sm:text-lg  lg:text-3xl md:text-1.5xl -mt-10 sm:-mt-11 md:-mt-10 lg:-mt-16">
                {data[3].name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* transparent pascal box */}
      <div className="flex flex-col items-center mt-[17rem] mb-[7rem] sm:mt-0 sm:mb-0 sm:pb-28 md:py-32">
        <Image
          src="/pascal-transparent.jpg"
          width={100}
          height={100}
          alt="pascal-tansparent"
          className="w-[6rem]"
        />
      </div>
      {/* text box */}
      <div className="pb-28 flex flex-col items-center">
        <p className="w-[19rem] sm:w-[30rem] md:w-[36rem]">
          {data[6].description}
        </p>
      </div>
      <RapunzelPage data={data} />
    </WhiteContainer>
  );
}

export default PascalPage;
