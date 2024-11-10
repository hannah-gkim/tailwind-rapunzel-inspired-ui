import React from "react";
import Image from "next/image";

function LandingLeftBox({ data }) {
  return (
    <>
      {/* left box */}
      <div className="p-5 space-y-2" style={{ flexBasis: "30%" }}>
        <p className="text-4xl font-bold">{data[0].name}</p>
        <p className="text-lg">{data[0].description}</p>
        <div className=" w-[11rem]">
          <Image
            src="/rapunzel-pascal-01.jpg"
            width={60}
            height={60}
            className="rounded-3xl w-full"
            alt="rapunzel-pascal-01"
          />
        </div>
      </div>
      {/* right box */}
      <div
        className=" p-5 space-y-3 flex flex-col justify-between"
        style={{ flexBasis: "20%" }}
      >
        <p className="text-4xl font-bold">{data[1].name}</p>
        <div className=" w-[9rem]">
          <Image
            src="/rapunzel-pascal-02.jpg"
            width={60}
            height={60}
            className="rounded-3xl w-full"
            alt="rapunzel-pascal-02"
          />
        </div>
        <div>
          <button
            className="bg-lavender text-white rounded-3xl w-[9rem] h-[2rem] text-xl hover:bg-opacity-50 transition duration-300 hover:text-lavender"
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
