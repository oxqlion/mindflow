import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userIdCookie = Cookies.get("userId");
    if (userIdCookie) {
      setLoggedIn(true);
      console.log("ada user brow");
    } else {
      setLoggedIn(false);
    }
  }, []);

  return loggedIn;
};

export default useAuth;
