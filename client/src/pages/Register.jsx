import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";

const Register = () => {
  const navigate = useNavigate();

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/login").then((response) => {
      if (response.data.loggedIn == true) {
        console.log(response.data.user.id);
        setUserId(response.data.user.id);
        console.log("ada user");
        console.log("User Id: ", userId);
        if (userLoggedIn) {
          console.log("redirecting ...");
          return redirect("/");
        }
      }
    });
  }, []);

  const register = () => {
    console.log(usernameReg, passwordReg);
    axios
      .post("http://localhost:3000/register", {
        username: usernameReg,
        password: passwordReg,
        firstName: firstNameReg,
        lastName: lastNameReg,
      })
      .then((response) => {
        console.log(response);
      })
      .then(navigate("/"));
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full p-8">
      <Link to="/" className="text-primary text-4xl font-bold m-2">
        Mindflow
      </Link>
      <div className="flex flex-col items-start justify-start p-16 gap-4 bg-white w-1/2 h-full rounded-3xl">
        <h1 className="font-sans font-bold text-black text-3xl">Daftar</h1>
        <label htmlFor="email" className="font-sans text-sm">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          placeholder="Masukkan Email Anda"
          className="p-2 rounded-sm border-md w-full bg-gray-100 font-sans text-sm"
          onChange={(e) => {
            setUsernameReg(e.target.value);
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
            setPasswordReg(e.target.value);
          }}
        />
        <div className="flex items-center justify-around w-full gap-4">
          <div className="">
            <label htmlFor="firstName" className="font-sans text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 rounded-sm border-md  mt-2 w-full bg-gray-100 font-sans text-sm"
              onChange={(e) => {
                console.log(firstNameReg);
                setFirstNameReg(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label htmlFor="lastName" className="font-sans text-sm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-2 rounded-sm border-md mt-2  w-full bg-gray-100 font-sans text-sm"
              onChange={(e) => setLastNameReg(e.target.value)}
            />
          </div>
        </div>
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
            onClick={register}
            className="font-sans font-bold text-md text-white px-12 py-4 rounded-sm bg-primary hover:opacity-50"
          >
            Daftar
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
          to="/login"
          className="font-sans font-medium text-sm text-blue-400 w-full flex items-center justify-center w-full hover:opacity-70"
        >
          Sudah punya akun?
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
  );
};

export default Register;
