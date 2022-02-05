import React from "react";

export default function Meme() {
  return (
    <form>
      <input
        type="text"
        placeholder="Shut up"
        className="border border-[#D5D4D8] rounded-md text-xs py-2.5 pl-2.5  w-[230px]"
      />
      <input
        type="text"
        placeholder="and take my money"
        className="border border-[#D5D4D8] rounded-md text-xs py-2.5 pl-2.5  w-[230px] ml-4"
      />
      <br />
      <button className="mt-4 w-[477px] h-10 rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-bold text-base tracking-tighter">
        Get a new meme image <span className="font-normal">🖼</span>
      </button>
    </form>
  );
}
