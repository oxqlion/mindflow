import React from "react"
import Star from "../assets/star.png";
import Trail from "../assets/trail.png";
import Emoji from "../assets/emoji.png";
import Mail from "../assets/sms.png";
import Call from "../assets/call.png";
import Time from "../assets/time-fill.png";
import Fb from "../assets/fb.png";
import Ig from "../assets/ig.png";
import Ln from "../assets/ln.png";
import Tw from "../assets/tw.png";


const Footer = () => {
    return(
        <div>
        <div className="flex items-start justify-around py-20 px-30 bg-bg font-sans">
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-bold text-lg">About Mindflow</p>
          <p className="text-lg">What is Mindflow?</p>
          <p className="text-lg">Contact Us</p>
          <p className="text-lg">Terms & Conditions</p>
          <p className="text-lg">Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-bold text-lg">Customer Support</p>
          <div className="flex w-full">
            <img src={Mail} alt="" className="w-8 mr-4" />
            <p className="text-lg">support@mindflow.co.id</p>
          </div>
          <div className="flex w-full">
            <img src={Call} alt="" className="w-8 mr-4" />
            <p className="text-lg">+6281288835715</p>
          </div>
          <div className="flex w-full">
            <img src={Time} alt="" className="w-8 mr-4" />
            <p className="text-lg">Working Hours: (Monday-Friday 9:00 AM - 5:00 PM)</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-bold text-lg">Social Media</p>
          <div className="flex gap-4 mb-2">
            <img src={Fb} alt="" />
            <img src={Ig} alt="" />
          </div>
          <div className="flex gap-4">
            <img src={Ln} alt="" />
            <img src={Tw} alt="" />
          </div>
        </div>
      </div>

      <p className="flex items-center justify-center w-full bg-bg pb-10">
        © Copyright 2023 Mindflow All Rights Reserved.
      </p>
        </div>
    )
}

export default Footer