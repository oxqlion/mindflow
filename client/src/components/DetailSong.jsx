import React, { useContext } from "react";
import { Songs } from "../Context";
import Checklist from "../assets/checklist.png";

export default function DetailSong() {
  const { song } = useContext(Songs);
  // const {song} = useContext(Songs)
  return (
    <div className="col-span-1 p-3 flex flex-col items-center justify-around shadow-xl">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h2 className="text-primary text-3xl font-sans font-bold">
          Now playing
        </h2>
        <h2 className=" text-xl font-sans text-black">{song.name}</h2>
      </div>
      <div className="w-72">
        <img className="w-full" src={song.links.images[0].url} alt="avatar" />
      </div>
      <div className="flex w-full justify-center gap-4 items-center">
        <img
          className="w-12 rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-xl text-black font-sans">{song.author}</span>
      </div>
      {/* 
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <div className='w-[240px] m-auto mt-10'>
                <img className='w-full' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
            <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt='avatar' />
            <span className='text-xl text-white'>{song.author}</span>
            </div> */}
    </div>
  );
}
