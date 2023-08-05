import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Harga from "./pages/Harga";
import Tentang from "./pages/Tentang";
import Support from "./pages/Support";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3000/login").then((response) => {
      if (response.data.loggedIn) {
        console.log(response.data.user.id);
        setUserLoggedIn(true);
        console.log("ada user di app");
        console.log("redirecting ...");
      }
    });
  }, [userLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userLoggedIn={userLoggedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:id" element={<Dashboard />}/>
        <Route path="/harga" element = {<Harga/>}/>
        <Route path="/tentang" element = {<Tentang/>}/>
        <Route path="/support" element = {<Support/>}/>
      </Routes>
    </Router>
  );
}

export default App;
