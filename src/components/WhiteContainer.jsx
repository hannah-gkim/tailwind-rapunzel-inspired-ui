import React from "react";

function WhiteContainer({ children, id, className = "" }) {
  return (
    <div
      id={id}
      className={`relative bg-white rounded-3xl py-5 px-8 w-[60rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default WhiteContainer;
