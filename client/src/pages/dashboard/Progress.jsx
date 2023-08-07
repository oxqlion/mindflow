import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import axios from "axios";

const Progress = ({ user }) => {
  const [journals, setJournals] = useState([]);
  const [journalDate, setJournalDate] = useState([]);
  const [resultDate, setResultDate] = useState([]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const getAllJournal = async () => {
      try {
        const response = await axios.post("http://localhost:3000/progress", {
          user_id: user.userId,
          date: getCurrentDate(),
        });
        setJournals(response.data.progress);
        console.log("harusnya udah jadi journal :", response.data.progress);
        // console.log("Journals is now : ", journals);

        const resJournals = await axios.post(
          "http://localhost:3000/user-journal",
          {
            user_id: user.userId,
          }
        );
        console.log(
          "res journals di progress jsx frontend : ",
          resJournals.data.journals
        );
        setJournalDate(resJournals.data.journals);
      } catch (error) {
        console.log("error fetching all tasks in front end : ", error);
      }
    };

    getAllJournal();
  }, [user]);

  useEffect(() => {
    console.log("journals jadi : ", journals);
  }, [journals]);

  useEffect(() => {
    console.log("journal date jadi : ", journalDate);
  }, [journalDate]);

  return (
    <div className="flex w-full h-full items-start">
      <div className="flex items-center justify-center w-full h-full">
        <FullCalendar
          aspectRatio={1}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "",
            center: "title",
            end: "today prev,next",
          }}
        />
      </div>
      <div className="flex flex-col w-full h-1/2 mt-4 overflow-y-scroll">
        {journals.map((item, index) => (
          <div key={index}>
            <h1 className="px-4 py-2 rounded-lg bg-bg font-sans font-bold text-primary w-max">
              {item.date.split("T")[0]}
            </h1>
            <div className="flex gap-4 p-2 w-full h-full items-center">
              <span className="flex w-[5px] h-4/5 rounded-full items-center jsutify-center bg-primary text-primary">
                .
              </span>
              <div className="flex flex-col gap-4">
                {journalDate
                  .filter((jitem) =>
                    jitem.date.includes(item.date.split("T")[0])
                  )
                  .map((jdate, index) => (
                    <div
                      className="flex flex-col items-end justify-start p-4 w-max bg-gray-100 rounded-lg font-medium font-sans text-sm text-gray-500"
                      key={index}
                    >
                      <p>{jdate.journal.split(":")[0].split(".")[1]}</p>
                      <button className="mt-2 text-gray-400 font-normal hover:font-medium transition ease-in-out">
                        See more...
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
