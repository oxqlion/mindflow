import React from 'react'
import Reading from "../../assets/hero2.png";
import Sad from "../../assets/emojis/sad.png";
import Worried from "../../assets/emojis/worried.png";
import Overhelmed from "../../assets/emojis/overwhelmed.png";

const Journaling = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full p-8 gap-4">
      <div className= "flex w-full items-start justify-start">
        <div className="flex flex-col w-full items-start justify-start mt-19">
        <p className="font-sans font-semibold text-brown text-4xl ml-20 mt-10">
          Thursday
        </p>
        <p className="font-sans font-medium text-gray-400 text-lg ml-20 mt-[10px]">Agustus 03, 2023</p>
        <img src={Reading} alt="Thumbnail" className="w-md mt-20" />
        </div>
        <div className="flex flex-col w-full items-start justify-start mt-19">
          <p className="font-sans font-semibold text-brown text-4xl ml-20 mt-20 pt-10">
            What's on your mind?
          </p>
          <div className="flex w-full items-start justify-start">
            <div className="mt-5 ml-[80px] pt-1 pl-5 pb-1 pr-5 rounded-[15px] bg-orange-400">
              <p className="font-sans font-regular text-white">sad</p>
            </div>
            <div className="mt-5 ml-[20px] pt-1 pl-5 pb-1 pr-5 rounded-[15px] bg-orange-400">
              <p className="font-sans font-regular text-white">worried</p>
            </div>
            <div className="mt-5 ml-[20px] pt-1 pl-5 pb-1 pr-5 rounded-[15px] bg-orange-400">
              <p className="font-sans font-regular text-white">overhelmed</p>
            </div>  
          </div>
          <div className="flex w-full items-start justify-start">
              <div className="ml-[80px] mt-5 pt-2 pb-2 pr-3">
                <div className="flex w-full items-start justify-start">
                  <img src={Sad} alt="Sad" className="w-[65px] "/>
                  <img src={Worried} alt="Worried" className="w-[65px] ml-[10px]"/>
                  <img src={Overhelmed} alt="Overhelmed" className="w-[65px] ml-[10px]"/>
                </div>
              </div>  
            </div>
            <div className="flex w-full items-start justify-start">
              <div className="ml-[80px] pb-[120px] pt=[100px] pl-[3px] pr-[3px] rounded-full mt-10 mb-10 bg-cyan-300">
              </div>
              <p className="font-sans font-regular text-black mt-10 ml-[10px]">
                I'm in a terrible mood. Had an argument <br /> with my friend, my car broke down, got a <br />
                surprise bill, and got soaked in the train. <br /> Can't shake off this bad mood. Today <br />
                needs to end now!  
                </p>
            </div>
            <button className="rounded-full ml-[80px] pt-[10px] pb-[10px] pl-[100px] pr-[100px] bg-orange-800 text-white font-sans font-regular">Next</button>
        </div>
      </div>
    </div>
  )
}

export default Journaling