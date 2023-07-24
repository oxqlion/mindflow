import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Navbar = () => {
  const user = useAuth();

  const handleLogOut = () => {
    axios
      .get("http://localhost:3000/logout")
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("Error logging out: ", error);
      });
  };

  return (
    <div className="flex items-center justify-around bg-bg w-full p-4">
      <Link to="/" className="text-5xl text-primary font-bold">
        Mindflow
      </Link>
      <div className="flex items-center justify-around p-2 w-50 gap-8">
        <Link className="hover:opacity-50 transition ease-in-out" to="/tentang">
          Tentang
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out" to="/layanan">
          Layanan
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out" to="/harga">
          Harga
        </Link>
        <Link className="hover:opacity-50 transition ease-in-out" to="/support">
          Support
        </Link>
        {user ? (
          <Link
            to="/login"
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
