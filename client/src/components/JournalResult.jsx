import ResultCard from "./ResultCard";

const JournalResult = ({ resArr, userSelect }) => {
  const feelingMessage = `Feeling ${userSelect
    .map((item) => item.name)
    .join(", ")} ${userSelect.length > 1 ? "and" : ""}`;

  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="font-sans font-bold text-black text-4xl mb-8">
        {feelingMessage}
      </h1>
      <ResultCard res={resArr[0]} />
      <ResultCard res={resArr[1]} />
      <ResultCard res={resArr[2]} />
      <ResultCard res={resArr[3]} />
    </div>
  );
};

export default JournalResult;
