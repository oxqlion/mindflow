import EmojiCarousel from "../../components/EmojiCarousel";
import UserJournal from "../../components/UserJournal";

import Reading from "../../assets/hero2.png";
import Amused from "../../assets/emojis/amused.png";
import Angry from "../../assets/emojis/angry.png";
import Annoyed from "../../assets/emojis/annoyed.png";
import Empty from "../../assets/emojis/empty.png";
import Gratitude from "../../assets/emojis/gratitude.png";
import Guilty from "../../assets/emojis/guilty.png";
import Hope from "../../assets/emojis/hope.png";
import Hopeless from "../../assets/emojis/hopeless.png";
import Joy from "../../assets/emojis/joy.png";
import Loved from "../../assets/emojis/loved.png";
import Optimistic from "../../assets/emojis/optimistic.png";
import Overwhelmed from "../../assets/emojis/overwhelmed.png";
import Relieved from "../../assets/emojis/relieved.png";
import Sad from "../../assets/emojis/sad.png";
import Satisfied from "../../assets/emojis/satisfied.png";
import Stressed from "../../assets/emojis/stressed.png";
import Worried from "../../assets/emojis/worried.png";
import { useState } from "react";
import JournalResult from "../../components/JournalResult";

const Journaling = ({ user }) => {
  const emojis = [
    { name: "Amused", icon: Amused },
    { name: "Angry", icon: Angry },
    { name: "Annoyed", icon: Annoyed },
    { name: "Empty", icon: Empty },
    { name: "Gratitude", icon: Gratitude },
    { name: "Guilty", icon: Guilty },
    { name: "Hope", icon: Hope },
    { name: "Hopeless", icon: Hopeless },
    { name: "Joy", icon: Joy },
    { name: "Loved", icon: Loved },
    { name: "Optimistic", icon: Optimistic },
    { name: "Overwhelmed", icon: Overwhelmed },
    { name: "Relieved", icon: Relieved },
    { name: "Sad", icon: Sad },
    { name: "Satisfied", icon: Satisfied },
    { name: "Stressed", icon: Stressed },
    { name: "Worried", icon: Worried },
  ];

  const currentDate = new Date();
  const dayName = currentDate.toLocaleString("en-US", { weekday: "long" });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const dateString = `${month}, ${date} ${year}`;

  const [userSelect, setUserSelect] = useState([]);
  const handleUserSelect = (data) => {
    if (!userSelect.some((selectedEmoji) => selectedEmoji.name === data)) {
      setUserSelect([...userSelect, data]);
    }
  };

  const [value, setValue] = useState(1);

  const handleNext = () => {
    console.log(userSelect);
    setValue((prevValue) => prevValue + 1);
    console.log(value);
  };

  const updateValueFromChildComponent = (val) => {
    setValue(val);
  };

  let content;

  const [resArr, setResArr] = useState([]);

  const handleResArr = (data) => {
    setResArr(data);
  };

  switch (value) {
    case 1:
      content = (
        <div>
          <EmojiCarousel sendUserSelect={handleUserSelect} />
          <button
            onClick={handleNext}
            className=" bg-primary text-white text-xl font-medium font-sans px-48 py-4 mt-6 rounded-full hover:opacity-50 transition ease-in-out"
          >
            Next
          </button>
        </div>
      );
      break;
    case 2:
      content = (
        <UserJournal
          handleNext={updateValueFromChildComponent}
          userSelect={userSelect}
          handleResArr={handleResArr}
        />
      );
      break;
    case 3:
      content = <JournalResult resArr={resArr} userSelect={userSelect} />;
      break;
    default:
      content = <div>Default option</div>;
      break;
  }

  return (
    <div className="flex flex-col items-start justify-center w-full p-8 gap-4">
      <div className="flex w-full items-start justify-center">
        <div className="flex flex-col w-full items-start justify-start mt-19">
          <p className="font-sans font-medium text-black text-xl ml-20 mt-[10px]">
            Hello, {user.username}
          </p>
          <p className="font-sans font-semibold text-black text-4xl ml-20 ">
            How are you today?
          </p>
          <p className="font-sans font-bold text-primary text-6xl ml-20">
            {dayName}
          </p>
          <p className="font-sans font-normal text-gray-400 text-lg ml-20 mt-[10px]">
            {dateString}
          </p>
          <img src={Reading} alt="Thumbnail" className="w-auto mt-8" />
        </div>
        <div className="flex flex-col w-full items-start justify-start ml-16">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Journaling;
