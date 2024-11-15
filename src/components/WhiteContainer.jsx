import React from "react";

function WhiteContainer({ children, id, className = "" }) {
  return (
    <div
      id={id}
      className={`relative bg-white rounded-3xl py-5 px-4 sm:px-4 md:px-6 lg:px-8 w-full sm:w-[38rem] md:w-[43rem] lg:w-[60rem]  ${className}`}
    >
      {children}
    </div>
  );
}

export default WhiteContainer;
