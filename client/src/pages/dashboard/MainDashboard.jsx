import React from "react";
import Dashboard1 from "../../assets/dashboard1.png";

const MainDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-y-scroll pt-48 p-8">
      <div className="flex flex-col w-full items-start justify-start">
        <p className="font-sans font-semibold text-black text-lg">
          Hi, Alexandra!
        </p>
        <h1 className="font-sans font-semibold text-black text-4xl">
          How are you today?
        </h1>
        <p className="font-sans font-semibold text-sm text-primary mt-2">
          Tell us how you feel and let AI help you!
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 w-full">
        <img src={Dashboard1} alt="" />
      </div>
    </div>
  );
};

export default MainDashboard;
