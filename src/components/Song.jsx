import React, { useState } from "react";
import Play from "../assets/song/pause.png";
import Skip from "../assets/song/play-button.png";
import clsx from "clsx";
import Lottie from "lottie-react";
import Signal from "../assets/song/songSignal.json";
const Song = () => {
  const [play , setPlay ] = useState(false);
       
  return (
    <div className="flex bg-black rounded-3xl px-3 py-3 items-end fixed bottom-10 z-10  right-10">
    <button
      onClick={() => setPlay((prev) => !prev)}
      className="flex w-[35px]  h-[35px] items-center bg-transparent justify-center font-bold cursor-pointer  font-popins gap-3"
    >
      <img
        className={clsx("w-full h-full")}
        src={play ? Play : Skip}
        alt=""
      />
      
    </button>
    {play && <Lottie className="w-[30px]" animationData={Signal} />}
    </div>
  );
};

export default Song;
