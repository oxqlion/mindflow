import React, { useState } from "react";
import Checklist from "../../assets/checklist.png";

export default function Details() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnClicked2, setBtnClicked2] = useState(false);
  const [btnClicked3, setBtnClicked3] = useState(false);
  const [btnClicked4, setBtnClicked4] = useState(false);

  const handleBtnClick = () => {
    setBtnClicked(!btnClicked);
  };

  const handleBtnClick2 = () => {
    setBtnClicked2(!btnClicked2);
  };

  const handleBtnClick3 = () => {
    setBtnClicked3(!btnClicked3);
  };

  const handleBtnClick4 = () => {
    setBtnClicked4(!btnClicked4);
  };

  return (
    <div className="flex flex-col">
      <ul>
        <li>
          <div className="flex w-full justify-start mt-10">
            <p className="font-sans font-semibold text-xl mt-1">
              1. Super Plus Package
            </p>
            <p className="font-sans font-semibold text-3xl ml-3 text-blue-600">
              150K
            </p>
            {/* <img src={Checklist} alt="" className="w-[90px] h-[90px ]"/> */}
            {/* <a href=" " className="ml-96"> */}
              <button
                onClick={() => handleBtnClick()}
                className={` ml-96 h-10 px-5 text-black transition-colors duration-150 border  border-gray-300 rounded-lg focus:shadow-outline bg-orange-500 hover:drop-shadow-lg font-sans font-bold ${
                  btnClicked ? "bg-green-300" : "bg-white"
                }`}
              >
                Choose Package
              </button>
            {/* </a> */}
          </div>
          <div className="flex w-full justify-start mt-3">
            <p className="font-sans font-semibold text-xl mt-1">
              2. Super Package
            </p>
            <p className="font-sans font-semibold text-3xl ml-3 text-yellow-500">
              145K
            </p>
            {/* <img src={Checklist} alt="" className="w-[90px] h-[90px ]"/> */}
            {/* <a href=" " className="ml-96"> */}
              <button
                onClick={() => handleBtnClick2()}
                className={` ml-[422px] h-10 px-5 text-black-700 transition-colors duration-150 border  border-gray-300 rounded-lg focus:shadow-outline bg-orange-500 hover:drop-shadow-lg hover:text-black font-sans font-bold ${
                  btnClicked2 ? "bg-green-300" : "bg-white"
                }`}
              >
                Choose Package
              </button>
            {/* </a> */}
          </div>
          <div className="flex w-full justify-start mt-3">
            <p className="font-sans font-semibold text-xl mt-1">
              3. Video Call Package
            </p>
            <p className="font-sans font-semibold text-3xl ml-3 text-red-600">
              215K
            </p>
            {/* <img src={Checklist} alt="" className="w-[90px] h-[90px ]"/> */}
            {/* <a href=" " className="ml-96"> */}
              <button
                onClick={() => handleBtnClick3()}
                className={` ml-96 h-10 px-5 text-black-700 transition-colors duration-150 border  border-gray-300 rounded-lg focus:shadow-outline bg-orange-500 hover:drop-shadow-lg hover:text-black font-sans font-bold ${
                  btnClicked3 ? "bg-green-300" : "bg-white"
                }`}
              >
                Choose Package
              </button>
            {/* </a> */}
          </div>
          <div className="flex w-full justify-start mt-3">
            <p className="font-sans font-semibold text-xl mt-1">
              4. Bundle Package
            </p>
            <p className="font-sans font-semibold text-3xl ml-3 text-green-600">
              399K
            </p>
            {/* <img src={Checklist} alt="" className="w-[90px] h-[90px ]"/> */}
            {/* <a href=" " className="ml-96"> */}
              <button
                onClick={() => handleBtnClick4()}
                className={` ml-[405px] h-10 px-5 text-black-700 transition-colors duration-150 border  border-gray-300 rounded-lg focus:shadow-outline bg-orange-500 hover:drop-shadow-lg hover:text-black font-sans font-bold ${
                  btnClicked4 ? "bg-green-300" : "bg-white"
                }`}
              >
                Choose Package
              </button>
            {/* </a> */}
          </div>
        </li>
      </ul>
    </div>
  );
}
