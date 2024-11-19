import React from "react";
import Image from "next/image";

const Lantern = ({ delay, leftPosition }) => {
  return (
    <div
      className={`absolute bottom-0 animate-floatUp`}
      style={{
        animationDelay: `${delay}s`, // Random delay for staggered start
        left: `${leftPosition}%`, // Random horizontal position
        zIndex: 10, // Ensure lantern is on top
      }}
    >
      <div
        className="w-8 h-10 bg-yellow-400 rounded-lg shadow-lg opacity-80 relative border-t-2 border-b-2 border-brown-400" // Thinner and lighter brown border
        style={{
          boxShadow:
            "0 0 10px rgba(255, 204, 0, 0.8), 0 0 15px rgba(255, 204, 0, 0.6)", // Glowing effect
          paddingTop: "5px", // Adding some padding for yellow light on top
          paddingBottom: "5px", // Adding some padding for yellow light on bottom
        }}
      >
        {/* Sun mark inside the lantern */}
        <Image
          width={10}
          height={10}
          src="./sun-mark.jpg" // Your brown sun mark image
          alt="Sun Mark"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4" // Center the sun mark
        />
      </div>
    </div>
  );
};

export default Lantern;
