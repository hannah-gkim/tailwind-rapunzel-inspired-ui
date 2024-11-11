"use client";
import React from "react";
import Image from "next/image";
import RapunzelPage from "./RapunzelPage";
import WhiteContainer from "./WhiteContainer";

function PascalPage({ data }) {
  return (
    <WhiteContainer className="pt-14" id="pascal">
      {/* top title  */}
      <div className="flex space-x-8 justify-between items-center">
        <p className="text-6xl">{data[5].name}</p>
        <p className="w-[28rem]">{data[5].description}</p>
        <div>
          <button
            className="bg-lavender text-white rounded-3xl w-[9rem] h-[2rem] text-xl hover:bg-opacity-50 transition duration-300 hover:text-lavender"
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
      <div className="relative flex space-x-5 h-[26rem] pt-6">
        <div className="w-[20%]">
          <div className="absolute w-[18.5%] flex flex-col items-center mt-5">
            <h1 className="text-3xl text-white font-extrabold text-shadow-grey z-10 tracking-wide">
              {data[0].name}
            </h1>
          </div>
          <Image
            src="/pascal-02.jpg"
            width={200}
            height={200}
            alt="pascal-02"
            className="rounded-3xl h-[24rem] w-full"
          />
        </div>
        <div className="w-[35%]">
          <Image
            src="/pascal-00.jpg"
            width={200}
            height={200}
            alt="pascal-00"
            className="rounded-3xl h-[24rem] w-full"
          />
          <div className="absolute w-[32.5%] flex flex-col items-center">
            <h1 className="text-3xl text-white font-extrabold text-shadow-grey z-10 tracking-wide -mt-16">
              {data[1].name}
            </h1>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="absolute w-[23.5%] flex flex-col items-center">
            <h1 className="text-3xl text-white font-extrabold text-shadow-grey z-10 tracking-wide mt-4">
              {data[2].name}
            </h1>
          </div>
          <Image
            src="/pascal-01.jpg"
            width={200}
            height={200}
            alt="pascal-01"
            className="rounded-3xl h-[24rem] w-full"
          />
        </div>
        <div className="w-[20%]">
          <Image
            src="/pascal-03.jpg"
            width={200}
            height={200}
            alt="pascal-03"
            className="rounded-3xl h-[24rem] w-full"
          />
          <div className="absolute w-[18%] flex flex-col items-center">
            <h1 className="text-3xl text-white font-extrabold text-shadow-grey z-10 tracking-wide -mt-16">
              {data[3].name}
            </h1>
          </div>
        </div>
      </div>
      {/* transparent pascal box */}
      <div className="flex flex-col items-center py-14">
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
        <p className="w-[36rem]">{data[6].description}</p>
      </div>
      <RapunzelPage data={data} />
    </WhiteContainer>
  );
}

export default PascalPage;
