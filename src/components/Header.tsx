import React from "react";
import logo from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="w-full h-16 bg-gradient-to-r from-[#672280] to-[#A626D3] text-white flex items-center">
      <div className=" w-8 ml-5">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="font-bold ml-1.5 text-xl tracking-tighter">
          Meme Generator
        </h1>
      </div>
      <div className="ml-auto mr-9">
        <h2 className="font-medium text-xs font-['Inter']">
          React Course - Project 3
        </h2>
      </div>
    </header>
  );
}

//
