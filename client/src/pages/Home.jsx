import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decoded from "jwt-decode";

import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import HeaderText from "../assets/header_text.png";
import Hero from "../assets/hero.png";
import Hero2 from "../assets/hero2.png";
import Hero3 from "../assets/hero3.png";
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

const Home = ({ user }) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar user={user} />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-center w-full bg-bg pt-24 pb-12">
          <div className="flex flex-col gap-4 w-1/2">
            <img src={HeaderText} alt="" className="h-48 w-min" />
            <p className="w-2/3 text-2xl font-medium">
            To assist you in living to the fullest, we have evolved to address various mental issues that you may experience.
            </p>
            <Link
              to="/harga"
              className="w-36 text-center hover:opacity-50 transition ease-in-out bg-black px-6 py-4 rounded-full font-sans font-semibold text-white"
            >
              Try For Free
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <img src={Hero} alt="" className="w-80" />
          </div>
        </div>

        <div className="flex items-center justify-between w-full bg-bg pt-8 pb-24">
          <img src={Hero2} alt="" className="w-1/3 ml-36" />
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-5xl font-bold">How can we</h1>
            <h1 className="text-5xl font-bold text-primary">Help You?</h1>
            <p className="w-3/4 text-xl font-medium">
            We collaborate with experts to create an effective mood journaling container to help those of you experiencing mental challenges to further develop and explore yourselves."
            </p>
            <Link
              to="/harga"
              className="w-36 text-center hover:opacity-50 transition ease-in-out bg-black px-6 py-4 rounded-full font-sans font-semibold text-white"
            >
              Try For Free
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-24 bg-primary">
        <p className="text-white text-lg font-sans font-medium px-4 py-2 rounded-full border-2 border-white">
          PEACEFUL BEGINNING
        </p>
        <div className="flex flex-col relative">
          <div className="flex items-center justify-between gap-2">
            <img src={Star} alt="" className="w-12" />
            <h1 className="text-5xl text-white font-black m-8">
              Bring Your Inner Peace
            </h1>
            <img src={Star} alt="" className="w-12" />
          </div>
          <img src={Trail} alt="" className="w-52 absolute right-8 bottom-0" />
        </div>
        <img src={Hero3} alt="" className="h-80 m-8" />
      </div>

      <div className="flex items-center justify-around p-24 w-full mt-24">
        <div className="flex flex-col gap-2 w-2/5">
          <p className="text-5xl">
            Try <span className="text-primary font-black">Mindflow</span>{" "}
            now to start your peaceful journey.i{" "}
            <span className="text-black font-black">peaceful journey</span> mu
          </p>
          <p className="mt-4 text-xl">
          What are you waiting for? Try our journaling program now and join millions of users who have already enjoyed its benefits
          </p>
        </div>
        <img src={Emoji} alt="" className="w-2/5" />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
