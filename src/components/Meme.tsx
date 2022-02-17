import React, { useState, useEffect } from "react";

interface MemeData {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState<MemeData[]>([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => setAllMemes(json.data.memes));
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const memesCount = allMemes.length;
    const randomIndex = Math.floor(Math.random() * memesCount);
    const { url } = allMemes[randomIndex];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="mt-9 mx-9">
      <form>
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="border border-[#D5D4D8] rounded-md text-xs py-2.5 pl-2.5  w-[230px]"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="border border-[#D5D4D8] rounded-md text-xs py-2.5 pl-2.5  w-[230px] ml-4"
        />
        <br />
        <button
          className="mt-4 mb-9 w-[477px] h-10 rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-bold text-base tracking-tighter cursor-pointer"
          onClick={handleClick}
        >
          Get a new meme image <span className="font-normal">🖼</span>
        </button>
      </form>
      <div className="font-['impact'] text-4xl relative text-center text-white uppercase">
        <img className="mx-auto rounded" src={meme.randomImage} alt="meme" />
        <h2 className="absolute w-4/5 left-1/2 -translate-x-1/2 top-4 text-shadow">
          {meme.topText}
        </h2>
        <h2 className="absolute w-4/5 left-1/2 -translate-x-1/2 bottom-4 text-shadow">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
