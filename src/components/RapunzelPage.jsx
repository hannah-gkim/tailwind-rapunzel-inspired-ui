import React from "react";
import Image from "next/image";

function RapunzelPage({ data }) {
  return (
    <div className="space-y-8 py-8" id="rapunzel">
      <div className="relative">
        <div>
          <Image
            src="./rapunzel-00.jpg"
            width={200}
            height={200}
            className="rounded-3xl w-[56rem] h-[21rem] sm:h-auto"
            alt="rapunzel-00"
          />
        </div>
        <div className="absolute w-full flex flex-col items-center  -mt-48 sm:-mt-60 md:-mt-60 lg:-mt-80">
          <h1 className="text-white font-extrabold text-shadow-grey z-10 tracking-widest text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Rapunzel
          </h1>
        </div>
      </div>
      {/* bottom box */}
      <div className="flex space-x-3 sm:space-x-8">
        {/* bottom left box */}
        <div className="relative flex">
          <div className="">
            <Image
              src="./rapunzel-01.jpg"
              width={200}
              height={200}
              className="rounded-3xl  h-[18rem] sm:h-[28rem] md:h-[29.5rem] lg:h-[31.5rem]  min-w-[9rem] w-full"
              alt="rapunzel-01"
            />
          </div>
          <div className="absolute w-full flex flex-col items-center mt-36 sm:mt-56 md:mt-60">
            <h1 className="text-white font-extrabold text-shadow-grey z-10 text-xl sm:text-3xl lg:text-4xl md:text-3xl">
              {data[3].name}
            </h1>
          </div>
        </div>
        {/* bottom right box */}
        <div className="relative space-y-3 sm:space-y-6">
          <div>
            <Image
              src="./rapunzel-02.jpg"
              width={200}
              height={200}
              className="rounded-3xl w-[30rem] sm:w-[30rem] h-[8.6rem] sm:h-[13.3rem]  md:h-[14rem] lg:h-[15rem] "
              alt="rapunzel-02"
            />
            <div className="absolute w-full flex flex-col items-center">
              <h1 className="text-white font-extrabold text-shadow-grey z-10 -mt-20 sm:-mt-28 text-xl sm:text-3xl lg:text-4xl md:text-3xl">
                {data[4].name}
              </h1>
            </div>
          </div>
          <div>
            <Image
              src="./rapunzel-03.jpg"
              width={200}
              height={200}
              className="rounded-3xl h-[8.6rem]  sm:h-[13.3rem]  md:h-[14rem]  lg:h-[15rem] w-full"
              alt="rapunzel-03"
            />
            <div className="absolute w-full flex flex-col items-center">
              <h1 className="text-white font-extrabold text-shadow-grey z-10 -mt-20 sm:-mt-28 text-xl sm:text-3xl lg:text-4xl md:text-3xl">
                {data[5].name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* text box */}
      <div className="py-14 flex flex-col items-center">
        <p className="w-[19rem] sm:w-[30rem] md:w-[36rem]">
          {data[7].description}
        </p>
      </div>
    </div>
  );
}

export default RapunzelPage;
