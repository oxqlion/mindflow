import Accordion from "./Accordion";
import ResultCard from "./ResultCard";

const JournalResult = ({ resArr, userSelect }) => {
  let feelingMessage;
  if (userSelect.length === 1) {
    feelingMessage = `Feeling ${userSelect[0].name}`;
  } else if (userSelect.length === 2) {
    feelingMessage = `Feeling ${userSelect[0].name} and ${userSelect[1].name}`;
  } else {
    feelingMessage = `Feeling ${userSelect
      .slice(0, -1)
      .map((item) => item.name)
      .join(", ")} and ${userSelect[userSelect.length - 1].name}`;
  }

  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="font-sans font-bold text-black text-3xl w-2/3 mb-6">
        {feelingMessage}
      </h1>
      <div className="flex gap-2 mb-4">
        {userSelect.map((emoji, index) => (
          <div
            className=" pl-5 pb-1 pr-5 rounded-[15px] bg-orange-400"
            key={index}
          >
            <p className="font-sans font-regular text-white">{emoji.name}</p>
          </div>
        ))}
      </div>
      <p className="font-sans font-normal text-md text-gray-700 mb-4">
        Your mood matters a lot because it affects how you feel emotionally and
        physically, impacts relationships, boosts productivity, and even
        influences your sleep. So, take care of your mood to improve your
        overall well-being!😊
      </p>
      <ResultCard res={resArr[0]} />
      <ResultCard res={resArr[1]} />
      <ResultCard res={resArr[2]} />
      <ResultCard res={resArr[3]} />
      {/* 
      <Accordion datas={resArr[0]} />
      <Accordion datas={resArr[1]} />
      <Accordion datas={resArr[2]} />
      <Accordion datas={resArr[3]} /> */}
    </div>
  );
};

export default JournalResult;
