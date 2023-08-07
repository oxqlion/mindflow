import React, { useState } from 'react'
import NavbarMeditation from '../../components/NavbarMeditation'
import DetailSong from '../../components/DetailSong'
import ListSongs from '../../components/ListSongs'
import { Songs } from "../../Context";
import DataSongs from "../../data/songs.json"
import Playing from '../../components/Playing';

const Meditation = () => {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) =>{
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div>
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
      <NavbarMeditation/>
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSong/>
          <ListSongs/>
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  )
}

export default Meditation