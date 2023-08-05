import { useState } from "react";
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

const EmojiCarousel = ({ sendUserSelect }) => {
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

  const [userSelect, setUserSelect] = useState([]);

  const handleEmojiClick = (emoji) => {
    sendUserSelect(emoji);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full pr-24 mt-32">
      <h1 className="font-sans font-bold text-primary text-4xl mb-8">
        What's on your mind?
      </h1>
      <div className="flex flex-wrap items-center justify-start h-[12em] gap-8 overflow-y-scroll">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className="w-[80px] hover:opacity-50 transition ease-in-out"
            onClick={() => handleEmojiClick(emoji)}
          >
            <img src={emoji.icon} alt={emoji.name} className="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiCarousel;
