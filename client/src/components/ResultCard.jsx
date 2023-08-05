import { useState } from "react";

const ResultCard = ({ res }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full mb-4 p-4">
        <div onClick={handleShow} className="flex justify-between">
          <h2>{res.split(":")[0]}</h2>
          <h2>+</h2>
        </div>
        <div
          className={` overflow-hidden transition ease-in-out ${
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
