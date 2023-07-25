import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { BiUser } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidBookHeart } from "react-icons/bi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BiSolidSpa } from "react-icons/bi";
import { BiSolidCog } from "react-icons/bi";

const Sidebar = ({ sendDashboard }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleClick = (menu) => {
    setActiveMenu(menu);
    sendDashboard(menu);
  };

  return (
    <div className="flex flex-col items-start justify-start w-72 h-screen bg-white shadow-lg p-6">
      <div className="flex items-center justify-start gap-4 w-full pb-8">
        <div className="flex items-center justify-center p-2 rounded-full outline">
          <BiUser className="text-3xl" />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="font-sans font-bold text-black text-lg">Alexandra</h1>
          <p className="font-sans text-gray-500 text-sm">Basic Package</p>
        </div>
      </div>
      <button
        className={`flex items-center justify-start w-full p-4 mb-2 rounded-md hover:bg-gray-100 transition ease-in-out ${
          activeMenu === "dashboard" ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("dashboard")}
      >
        <BiSolidDashboard
          className={`${
            activeMenu === "dashboard" ? "text-white" : "text-black"
          } text-2xl rounded-full mr-2`}
        />
        <h1
          className={`font-sans font-medium text-lg ${
            activeMenu === "dashboard" ? "text-white" : "text-black"
          }`}
        >
          Dashboard
        </h1>
      </button>
      <button
        className={`flex items-center justify-start w-full p-4 mb-2 rounded-md hover:bg-gray-100 transition ease-in-out ${
          activeMenu === "journaling" ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("journaling")}
      >
        <BiSolidBookHeart
          className={`${
            activeMenu === "journaling" ? "text-white" : "text-black"
          } text-2xl rounded-full mr-2`}
        />
        <h1
          className={`font-sans font-medium text-lg ${
            activeMenu === "journaling" ? "text-white" : "text-black"
          }`}
        >
          Journaling
        </h1>
      </button>
      <button
        className={`flex items-center justify-start w-full p-4 mb-2 rounded-md hover:bg-gray-100 transition ease-in-out ${
          activeMenu === "progress" ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("progress")}
      >
        <BiSolidBarChartAlt2
          className={`${
            activeMenu === "progress" ? "text-white" : "text-black"
          } text-2xl rounded-full mr-2`}
        />
        <h1
          className={`font-sans font-medium text-lg ${
            activeMenu === "progress" ? "text-white" : "text-black"
          }`}
        >
          Progress
        </h1>
      </button>
      <button
        className={`flex items-center justify-start w-full p-4 mb-2 rounded-md hover:bg-gray-100 transition ease-in-out ${
          activeMenu === "meditation" ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("meditation")}
      >
        <BiSolidSpa
          className={`${
            activeMenu === "meditation" ? "text-white" : "text-black"
          } text-2xl rounded-full mr-2`}
        />
        <h1
          className={`font-sans font-medium text-lg ${
            activeMenu === "meditation" ? "text-white" : "text-black"
          }`}
        >
          Meditation
        </h1>
      </button>
      <button
        className={`flex items-center justify-start w-full p-4 mb-2 rounded-md hover:bg-gray-100 transition ease-in-out ${
          activeMenu === "settings" ? "bg-primary" : "bg-white"
        }`}
        onClick={() => handleClick("settings")}
      >
        <BiSolidCog
          className={`${
            activeMenu === "settings" ? "text-white" : "text-black"
          } text-2xl rounded-full mr-2`}
        />
        <h1
          className={`font-sans font-medium text-lg ${
            activeMenu === "settings" ? "text-white" : "text-black"
          }`}
        >
          Settings
        </h1>
      </button>
    </div>
  );
};

export default Sidebar;
