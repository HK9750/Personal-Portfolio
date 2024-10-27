import Image from "next/image";
import SearchIcon from "../../../public/Search.svg";
import React from "react";

const Input:React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        id="search-input"
        className="border rounded-[24px] py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-brand1"
      />
      <Image
        src={SearchIcon}
        alt="Search Icon"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"
        width={15}
        height={15}
      />
    </div>
  );
};

export default Input;
