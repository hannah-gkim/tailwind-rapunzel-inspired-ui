import React from "react";
import Image from "next/image";

function RapunzelPage({ data }) {
  return (
    <div className="space-y-8 py-8" id="rapunzel">
      <div className="relative">
        <div className="">
          <Image
            src="/rapunzel-00.jpg"
            width={200}
            height={200}
            className="rounded-3xl w-[56rem] "
            alt="rapunzel-00"
          />
        </div>
        <div className="absolute w-full -mt-80 flex flex-col items-center">
          <h1 className="text-6xl text-white font-extrabold text-shadow-grey z-10 tracking-widest">
            Rapunzel
          </h1>
        </div>
      </div>
      {/* bottom box */}
      <div className="flex space-x-8">
        {/* bottom left box */}
        <div className="relative flex">
          <div className="">
            <Image
              src="/rapunzel-01.jpg"
              width={200}
              height={200}
              className="rounded-3xl h-[30rem] w-auto"
              alt="rapunzel-01"
            />
          </div>
          <div className="absolute w-full flex flex-col items-center mt-60">
            <h1 className="text-4xl text-white font-extrabold text-shadow-grey z-10 tracking-wide">
              {data[3].name}
            </h1>
          </div>
        </div>
        {/* bottom right box */}
        <div className="relative">
          <div>
            <Image
              src="/rapunzel-02.jpg"
              width={200}
              height={200}
              className="rounded-3xl w-[30rem] h-[15rem]"
              alt="rapunzel-02"
            />
            <div className="absolute w-full flex flex-col items-center">
              <h1 className="text-4xl text-white font-extrabold text-shadow-grey z-10 tracking-wide -mt-28">
                {data[4].name}
              </h1>
            </div>
          </div>
          <div>
            <Image
              src="/rapunzel-03.jpg"
              width={200}
              height={200}
              className="rounded-3xl h-[15rem] w-full"
              alt="rapunzel-03"
            />
            <div className="absolute w-full flex flex-col items-center">
              <h1 className="text-4xl text-white font-extrabold text-shadow-grey z-10 tracking-wide -mt-28">
                {data[5].name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* text box */}
      <div className="py-14 flex flex-col items-center">
        <p className="w-[36rem]">{data[6].description}</p>
      </div>
    </div>
  );
}

export default RapunzelPage;
