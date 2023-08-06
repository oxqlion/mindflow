import React from 'react'
import Checklist from "../../assets/checklist.png"

export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <img src={Checklist} alt="" className="w-150px h-[150px]" />
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
        Congratulations!
      </div>
      <div className="text-lg font-semibold text-gray-500">
        Your Application Form Has Been Send.
      </div>
      <a href="/" className="mt-10">
        <button className="h-10 px-5 text-green-700 transition-colors duration-150 border  border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
        </button>
      </a>
      </div>
     
    </div>
  )
}
