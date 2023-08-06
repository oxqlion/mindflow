import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Harga from "./pages/Harga";
import Tentang from "./pages/Tentang";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Layanan from "./pages/Layanan";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/token");
      const decoded = jwtDecode(response.data.accessToken);
      setUser(decoded);
      console.log("User: ", decoded);
    } catch (error) {
      console.log("Refresh token app js error: ", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/layanan" element = {<Layanan/>}/>
        <Route path="/harga" element = {<Harga/>}/>
        <Route path="/tentang" element = {<Tentang/>}/>
        <Route path="/support" element = {<Support/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;