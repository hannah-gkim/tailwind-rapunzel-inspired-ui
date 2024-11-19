import React from "react";

const DropdownNav = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-[24vh] bg-lavender text-white flex flex-col items-center  space-y-4  justify-center  shadow-lg z-10  rounded-3xl">
          <a href="#pascal" className="text-1.5xl hover:underline">
            Pascal
          </a>
          <a href="#rapunzel" className="text-1.5xl hover:underline">
            Rapunzel
          </a>
          <a href="#contact" className="text-1.5xl hover:underline">
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default DropdownNav;
