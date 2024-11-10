import React from "react";
import Image from "next/image";

function LandingRightBox({ data }) {
  return (
    <div className="p-5 space-y-3" style={{ flexBasis: "50%" }}>
      <div className="pl-28">
        <p className="text-4xl font-bold">{data[2].name}</p>
      </div>
      <div className="space-y-2">
        {/* box 1 */}
        <div className="flex space-x-5">
          <div className="min-w-[5rem] max-w-[5rem]">
            <Image
              src="/rapunzel-pascal-03.jpg"
              width={60}
              height={60}
              className="rounded-2xl w-full"
              alt="rapunzel-pascal-03"
            />
          </div>
          <p className="text-lg">{data[2].description}</p>
        </div>
        <div className="h-1 w-full bg-lavender"></div>
        {/* box2 */}
        <div className="flex space-x-5">
          <div className="min-w-[5rem] max-w-[5rem]">
            <Image
              src="/rapunzel-pascal-04.jpg"
              width={100}
              height={100}
              className="rounded-2xl w-full"
              alt="rapunzel-pascal-04"
            />
          </div>
          <p className="text-lg">{data[3].description}</p>
        </div>
        <div className="h-1 w-full bg-lavender"></div>
        {/* box3 */}
        <div className="flex space-x-5">
          <div className="min-w-[5rem] max-w-[5rem]">
            <Image
              src="/rapunzel-pascal-05.jpg"
              width={100}
              height={100}
              className="rounded-2xl w-full"
              alt="rapunzel-pascal-05"
            />
          </div>
          <p className="text-lg">{data[4].description}</p>
        </div>
      </div>
    </div>
  );
}

export default LandingRightBox;
