import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Axios from "axios";
import useAuth from "../hooks/useAuth";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";

import Cloud1 from "../assets/cloud.png";
import Cloud2 from "../assets/cloud2.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);

  const userLoggedIn = useAuth();

  Axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   Axios.get("http://localhost:3000/login")
  //     .then((response) => {
  //       if (response.data.loggedIn) {
  //         console.log(response.data.user.id);
  //         setUserId(response.data.user.id);
  //         console.log("ada user");
  //         console.log("User Id: ", userId);
  //         console.log("redirecting ...");
  //         // return navigate("/");
  //       }
  //     })
  //     .catch((error) => console.log("error: ", error));
  // });

  const login = () => {
    console.log("login pressed");
    Axios.post("http://localhost:3000/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (!response.data.message) {
          setLoginStatus(response.data.message);
          setLoggedIn(true);
          console.log(response.data);
          console.log("logged in. redirecting ...");
          window.location.href = "/"
          // return redirect("/");
        } else {
          const text1 = "error: ";
          const text2 = response.data.message;
          const text = text1.concat(text2);
          console.log(text);
          setLoggedIn(false);
          setLoginStatus(text);
        }
      })
      .then(navigate("/dashboard"));
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-8 bg-bg h-screen relative">
      <img src={Cloud2} alt="" className="absolute top-4 left-48" />
      <img src={Cloud1} alt="" className="absolute top-72 left-24" />
      <img src={Cloud1} alt="" className="absolute bottom-12 right-24" />
      <img src={Cloud2} alt="" className="absolute top-12 right-12" />
      <Link to="/" className="text-primary text-4xl font-bold m-2">
        Mindflow
      </Link>
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-start justify-between p-24 w-1/2 h-full gap-48 bg-primary rounded-[70px]">
          <div className="flex flex-col items-start">
            <h1 className="font-sans font-bold text-white text-4xl">
              Selamat Datang <br /> #PeacefullWarrior!
            </h1>
            <div className="pt-4 text-lg text-white font-light font-sans w-56">
              Yuk bangun mindfullness mu bersama mindflow, mulai dari sekarang!
            </div>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center justify-center rounded-full bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer">
              <BiLogoFacebookCircle className="text-xl text-primary" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer">
              <BiLogoInstagramAlt className="text-xl text-primary" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer">
              <BiLogoLinkedinSquare className="text-xl text-primary" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer">
              <BiLink className="text-xl text-primary" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-16 gap-4 bg-white w-1/3 h-full rounded-3xl">
          <h1 className="font-sans font-bold text-black text-3xl">Masuk</h1>
          <label htmlFor="email" className="font-sans text-sm">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Masukkan Email Anda"
            className="p-2 rounded-sm border-md w-full bg-gray-100 font-sans text-sm"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" className="font-sans text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Masukkan Password Anda"
            className="p-2 rounded-sm border-md w-full bg-gray-100 font-sans text-sm"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" name="" className="cursor-pointer" />
            <p className="font-sans text-sm">Ingat Saya</p>
          </div>
          <div className="flex items-center justify-between my-4 w-full">
            <Link
              to="#"
              className="font-sans font-bold text-sm text-primary hover:opacity-50"
            >
              Lupa Kata Sandi?
            </Link>
            <button
              onClick={login}
              className="font-sans font-bold text-md text-white px-12 py-4 rounded-sm bg-primary hover:opacity-50"
            >
              Masuk
            </button>
          </div>
          <div className="flex items-center justify-between gap-2 w-full">
            <span className="flex w-16 h-[1px] bg-gray-600"></span>
            <p className="font-sans text-gray-600 text-sm">
              Atau masuk menggunakan
            </p>
            <span className="flex w-16 h-[1px] bg-gray-600"></span>
          </div>
          <div className="flex items-center justify-center gap-2 w-full">
            <Link
              to="/"
              className="flex items-center justify-center rounded-full border-2 bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer"
            >
              <BiLogoGoogle className="text-xl text-black" />
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center rounded-full border-2 bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer"
            >
              <BiLogoFacebookCircle className="text-xl text-black" />
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center rounded-full border-2 bg-white p-4 hover:opacity-50 transition ease-in-out cursor-pointer"
            >
              <BiLogoLinkedinSquare className="text-xl text-black" />
            </Link>
            <Link to="/"></Link>
            <Link to="/"></Link>
          </div>

          <Link
            to="/register"
            className="font-sans font-medium text-sm text-blue-400 w-full flex items-center justify-center w-full hover:opacity-70"
          >
            Belum punya akun? Daftar sekarang!
          </Link>
          {/* <h1
            className={`${
              loginStatus ? "flex" : "opacity-0"
            }absolute top-24 left-0 w-full items-center justify-center bg-red-400 font-sans font-medium text-lg text-white rounded-sm p-4`}
          >
            {loginStatus}
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
