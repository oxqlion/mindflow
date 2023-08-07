import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  console.log(DataSongs);
  //   const [idSong, setidSong] = useState(0);
  //   const handlePlaySong = (idSong) => {
  //     setidSong(idSong)
  //     handleSetSong(idSong)
  //   };
  //   useEffect(() => {
  //     setidSong(song.id)
  //   }, [song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="text-black font-sans h-12">
          <tr>
            <th className="font-medium w-[10%]">#</th>
            <th className="font-medium text-left">Title</th>
            <th className="font-medium w-[10%]">Author</th>
            <th className="font-medium w-[10%]">
              {" "}
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={` h-12 text-black hover:bg-gray-200 cursor-pointer ${
                idSong === song.id && "bg-primary text-bg"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center font-sans">{index + 1}</td>
              <td className="font-sans">{song.name}</td>
              <td className="text-center font-sans">{song.author}</td>
              <td className="text-center font-sans">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
