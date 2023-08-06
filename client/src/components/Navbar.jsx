import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import axios from "axios";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const toLink = user ? "/dashboard" : "/login";

  const handleLogOut = () => {
    axios
      .delete("http://localhost:3000/logout")
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("Error logging out: ", error);
      });
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-around bg-bg w-full p-4">
      <Link to="/" className="text-5xl text-primary font-bold">
        Mindflow
      </Link>
      <div className="flex items-center justify-around p-2 w-50 gap-8">
      <Link className="hover:opacity-50 transition ease-in-out font-sans font-regular text-lg" to="/">
          Home
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out font-sans font-regular text-lg" to="/tentang">
          Tentang
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out font-sans font-regular text-lg" to={toLink}>
          Layanan
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out font-sans font-regular text-lg" to="/harga">
          Harga
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out font-sans font-regular text-lg" to="/support">
          Support
        </Link>
        {user ? (
          <Link
            to="/"
            className="hover:opacity-50 transition ease-in-out bg-black px-6 py-2 ml-12 rounded-full font-sans font-semibold text-white"
            onClick={handleLogOut}
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="hover:opacity-50 transition ease-in-out bg-black px-6 py-2 ml-12 rounded-full font-sans font-semibold text-white"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
