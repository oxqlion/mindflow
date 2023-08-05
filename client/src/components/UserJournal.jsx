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

const UserJournal = ({ userSelect }) => {
  const [journal, setJournal] = useState("");
  const [loading, setLoading] = useState(false);

  const userSelectString = userSelect.join(", ");

  const handleClick = async (req, res) => {
    console.log("prompt clicked");
    console.log(journal);

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/submitJournal", {
        userId: "your-user-id", // Replace with actual user ID
        prompt: journal, // Assuming 'journal' contains the prompt you want to send
        journalDate: "your-journal-date", // Replace with actual journal date
      });
      console.log("Response from backend : ", response.data.msg);
    } catch (error) {
      console.log("Error fetching di frontend : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default UserJournal;
