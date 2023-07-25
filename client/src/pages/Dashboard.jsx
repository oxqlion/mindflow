import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

import MainDashboard from "./dashboard/MainDashboard";
import Journaling from "./dashboard/Journaling";
import Progress from "./dashboard/Progress";
import Meditation from "./dashboard/Meditation";
import Settings from "./dashboard/Settings";

import { BiUser } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState("dashboard");

  const handleDashboard = (data) => {
    setDashboard(data);
  };

  return (
    <div className="flex items-start justify-start w-full">
      <Sidebar sendDashboard={handleDashboard} />
      {/* {dashboard && <p>Data from child: {dashboard}</p>} */}
      <div className="flex flex-col items-start justify-start w-full h-screen">
        <div className="flex items-center justify-end p-4 gap-4 w-full shadow-md">
          <BiUser className="text-xl text-primary hover:opacity-50 transition ease-in-out cursor-pointer" />
          <BiSolidBell className="text-xl text-primary hover:opacity-50 transition ease-in-out cursor-pointer" />
          <div className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded md hover:opacity-50 transition ease-in-out cursor-pointer">
            <BiLogOut className="text-lg text-white mr-2" />
            <p className="font-sans text-lg text-white">Keluar</p>
          </div>
        </div>
        {(() => {
            switch(dashboard) {
                case 'dashboard':
                    return <MainDashboard />
                case 'journaling':
                    return <Journaling />
                case 'progress':
                    return <Progress />
                case 'meditation':
                    return <Meditation />
                case 'settings':
                    return <Settings />
            }
        })()}
      </div>
    </div>
  );
};

export default Dashboard;