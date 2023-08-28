import React from "react";
import MainButton from "./MainButton";

function Navbar() {
  return (
    <div className=" h-14 bg-[#222831] ">
      <div className="flex justify-between items-center">
        <div className=" flex items-center ml-6 mt-2">
          <MainButton text="Home" />
        </div>
        <div className=" flex items-center mt-2 mr-6">
          <MainButton text="About me" />
          <MainButton text="Projects" />
          <MainButton text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
