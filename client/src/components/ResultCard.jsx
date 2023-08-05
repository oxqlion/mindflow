import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiSolidHeartCircle } from "react-icons/bi";

const ResultCard = ({ res }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full mb-4 p-4 transition-all ease-in-out">
        <div
          onClick={handleShow}
          className="flex justify-between cursor-pointer transition ease-in-out"
        >
          <div className="flex gap-4 items-start justify-center transition ease-in-out">
            <BiSolidHeartCircle className="text-primary text-3xl mt-1" />
            <h2 className="font-sans font-bold text-primary text-2xl">
              {res.split(":")[0]}
            </h2>
          </div>
          <BiChevronDown className="text-2xl text-primary" />
        </div>
        <div
          className={`transition-all ease-in-out overflow-hidden ml-12 mr-8 mt-4 font-sans font-medium text-md ${
            show ? "block h-auto max-h-96" : "hidden max-h-0"
          }`}
        >
          {res.split(":")[1]}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
