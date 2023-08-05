import { useState } from "react";
import axios from "axios";

import Amused from "../assets/emojis/amused.png";
import Angry from "../assets/emojis/angry.png";
import Annoyed from "../assets/emojis/annoyed.png";
import Empty from "../assets/emojis/empty.png";
import Gratitude from "../assets/emojis/gratitude.png";
import Guilty from "../assets/emojis/guilty.png";
import Hope from "../assets/emojis/hope.png";
import Hopeless from "../assets/emojis/hopeless.png";
import Joy from "../assets/emojis/joy.png";
import Loved from "../assets/emojis/loved.png";
import Optimistic from "../assets/emojis/optimistic.png";
import Overwhelmed from "../assets/emojis/overwhelmed.png";
import Relieved from "../assets/emojis/relieved.png";
import Sad from "../assets/emojis/sad.png";
import Satisfied from "../assets/emojis/satisfied.png";
import Stressed from "../assets/emojis/stressed.png";
import Worried from "../assets/emojis/worried.png";
import Loading from "../assets/loading.png";

const UserJournal = ({ handleResArr, handleNext, userSelect }) => {
  const [journal, setJournal] = useState("");
  const [loading, setLoading] = useState(false);

  const newArray = userSelect.map((emoji) => emoji.name);
  const userSelectString = newArray.join(" ");

  const handleClick = async (req, res) => {
    console.log("prompt clicked");
    console.log(userSelectString);

    try {
      setLoading(true);

      const template =
        "I'm feeling " +
        userSelectString +
        ". " +
        journal +
        ". What do i need to do to increase my : 1. patience, 2. non-reactivity, 3. acceptance, 4. gratitude";

      console.log(template);

      const response = await axios.post("http://localhost:3000/submitJournal", {
        userId: "your-user-id",
        prompt: template,
        journalDate: "your-journal-date",
      });
      console.log("Response from backend : ", response.data.msg);

      const resFromBackend = response.data.msg;
      const adviceArray = resFromBackend
        .split(/\d+\./g)
        .filter((item) => item.trim().length > 0);
      console.log("Splitted string : ", adviceArray);
      handleResArr(adviceArray);
    } catch (error) {
      console.log("Error fetching di frontend : ", error);
    } finally {
      setLoading(false);
      handleNext(3);
    }
  };

  return (
    <div className="relative">
      <h1 className="font-sans font-bold text-primary text-4xl mb-8">
        What's on your mind?
      </h1>
      <div className="flex w-full gap-4 items-start justify-start">
        {userSelect.map((emoji, index) => (
          <div
            className=" pl-5 pb-1 pr-5 rounded-[15px] bg-orange-400"
            key={index}
          >
            <p className="font-sans font-regular text-white">{emoji.name}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full items-start justify-start">
        <div className=" mt-5 pt-2 pb-2 pr-3">
          <div className="flex w-full items-start justify-start gap-2 p-2 rounded-xl bg-[#F3DCC6]">
            {userSelect.map((emoji, index) => (
              <img
                src={emoji.icon}
                alt={emoji.name}
                className="w-[70px]"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-start">
        <div className="pb-[120px] pt-[60px] pl-[3px] pr-[3px] rounded-full mt-10 mb-10 bg-pink-800"></div>
        <textarea
          name=""
          id=""
          cols="50"
          rows="6"
          className="mt-8 p-4 outline-none font-sans font-medium text-lg tracking-wider"
          placeholder="Write your journal here ..."
          onChange={(e) => setJournal(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={handleClick}
        className=" bg-primary text-white text-xl font-medium font-sans px-48 py-4 mt-6 rounded-full hover:opacity-50 transition ease-in-out"
      >
        Next
      </button>
      {loading ? (
        <img
          src={Loading}
          alt=""
          className="absolute top-0.5 left-[-50%] drop-shadow-2xl"
        />
      ) : (
        <img src={Loading} alt="" className="hidden" />
      )}
    </div>
  );
};

export default UserJournal;
