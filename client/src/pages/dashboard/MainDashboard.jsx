import axios from "axios";
import { BiUser } from "react-icons/bi";
import Mental from "../../assets/mental.png";
import Mind1 from "../../assets/mind1.png";
import Mind2 from "../../assets/mind2.png";
import Mind3 from "../../assets/mind3.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

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
import { useEffect, useState } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MainDashboard = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [subTasks, setSubTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("User ID, ", user.userId, ", Date :", getCurrentDate());
        const response = await axios.post("http://localhost:3000/task", {
          user_id: user.userId,
          date: getCurrentDate(),
        });
        const data = response.data.task;
        console.log("data : ", data);
        console.log("get tasks main dashboard response : ", response.data.task);
        setSubTasks(data);
        // setSubTasks(response.data.task);
        // setTasks(response.data.task);
        // console.log("subtasks : ", subTasks);
        // console.log("tasks : ", tasks);
        // const adviceArray = response.data.task[0].result
        //   .split(/\d+\./g)
        //   .filter((item) => item.trim().length > 0);
        // console.log("Splitted string : ", adviceArray);
        // subTasks.forEach((task) => {
        //   const adviceArray = task.result
        //     .split(/\d+\./g)
        //     .filter((item) => item.trim().length > 0);
        //   console.log("advice array dalem foreahc ni : ", adviceArray);
        //   adviceArray.forEach((advice) => {
        //     console.log("Ada berapa advice ya :", advice);
        //     setTasks([...tasks, advice]);
        //   });
        // });
      } catch (error) {
        console.log("Error di maindashboard get task : ", error);
      }
    };

    fetchData();
  }, [user]);

  // useEffect(() => {
  //   console.log("Updated subTasks:", subTasks);
  //   subTasks.map((task) => {
  //     const adviceArray = task.result
  //       .split(/\d+\./g)
  //       .filter((item) => item.trim().length > 0);
  //     console.log("ini advicedarray di dalem use effect subtask : ", adviceArray);
  //   });
  // }, [subTasks]);

  useEffect(() => {
    console.log("Updated subTasks:", subTasks);
    const newTasks = subTasks.flatMap((task) => {
      const adviceArray = task.result
        .split(/\d+\./g)
        .filter((item) => item.trim().length > 0);
      console.log(
        "ini advicedarray di dalem use effect subtask : ",
        adviceArray
      );
      return adviceArray;
    });

    setTasks(newTasks);
  }, [subTasks]);

  useEffect(() => {
    console.log("Ini semua tasknya : ", tasks);
  }, [tasks]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const percentage1 = 57;
  const percentage2 = 62;
  const percentage3 = 35;
  const percentage4 = 58;

  const data = {
    labels: [11, 12, 13, 14, 15, 16, 17],
    datasets: [
      {
        label: "Mood",
        data: [76, 53, 64, 82, 71, 67, 48],
        backgroundColor: "#946047",
      },
    ],
  };

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

  const options = {};

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory
    ? tasks.filter((task) =>
        task.includes(selectedCategory)
      )
    : tasks;

  return (
    <div className="flex flex-col items-start justify-center w-full p-8 gap-4">
      <div className="flex flex-col w-full items-start justify-start">
        <p className="font-sans font-semibold text-black text-lg">
          Hi, {user.username}!
        </p>
        <h1 className="font-sans font-semibold text-black text-4xl">
          How are you today?
        </h1>
        <p className="font-sans font-semibold text-sm text-primary mt-2">
          Tell us how you feel and let AI help you!
        </p>
      </div>
      <div className="flex items-start justify-start gap-4 w-full">
        <div className="flex flex-col items-center justify-center w-2/3 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-start p-4 w-full">
            <h1 className="font-sans font-semibold text-2xl">
              Today's Mindfullness Plan
            </h1>
          </div>
          <div className="flex items-start justify-center w-full">
            <div className="flex flex-col items-start justify-center gap-2 w-1/3 p-2">
              <button
                onClick={() => handleCategoryFilter("Patience")}
                className="flex w-full hover:bg-gray-100 p-2 rounded-lg font-sans font-medium"
              >
                Patience
              </button>
              <button
                onClick={() => handleCategoryFilter("Non-reactivity")}
                className="flex w-full hover:bg-gray-100 p-2 rounded-lg font-sans font-medium"
              >
                Non-Reactivity
              </button>
              <button
                onClick={() => handleCategoryFilter("Acceptance")}
                className="flex w-full hover:bg-gray-100 p-2 rounded-lg font-sans font-medium"
              >
                Acceptance
              </button>
              <button
                onClick={() => handleCategoryFilter("Gratitude")}
                className="flex w-full hover:bg-gray-100 p-2 rounded-lg font-sans font-medium"
              >
                Gratitude
              </button>
              {/* <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="Journaling"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="Journaling"
                  className="font-sans font-normal cursor-pointer"
                >
                  Journaling
                </label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="Journaling"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="Journaling"
                  className="font-sans font-normal cursor-pointer"
                >
                  Meditation
                </label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="Journaling"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="Journaling"
                  className="font-sans font-normal cursor-pointer"
                >
                  Take a walk
                </label>
              </div>
              <div className="flex items-center justify-start gap-2">
                <input
                  type="checkbox"
                  name="Journaling"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="Journaling"
                  className="font-sans font-normal cursor-pointer"
                >
                  Pray
                </label>
              </div>
              <input
                type="text"
                name=""
                placeholder="Add yours here"
                className="font-sans font-normal text-black p-2 rounded-md outline-none hover:bg-gray-100 transition ease-in-out cursor-pointer w-full"
              /> */}
            </div>
            <div className="flex flex-col items-start justify-start p-4 w-full gap-4">
              {filteredTasks.length > 0 ? (
                <ul>
                  {filteredTasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              ) : (
                <p>No tasks found for the selected category.</p>
              )}
              <div className="flex items-start justify-start w-full h-full bg-primary rounded-2xl p-6">
                <div className="flex items-start justify-start p-2 bg-primary rounded-xl w-full">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full">
                    <BiUser className="text-4xl text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full px-6">
                    <h1 className="font-medium font-sans text-xl text-white">
                      Mindfullness
                    </h1>
                    <h1 className="font-normal font-sans text-md text-white">
                      Category: Mental | Time: 2h
                    </h1>
                    <p className="font-sans font-normal text-md text-white mt-8">
                      Engaging in mindful movement practices like yoga or Tai
                      Chi can help connect your body and mind while promoting
                      relaxation.
                    </p>
                  </div>
                  <div className="flex-items-start justify-start p-2">
                    <img src={Mental} alt="thumbnail" className="w-48" />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start w-full h-full bg-white rounded-2xl p-6">
                <div className="flex items-start justify-start p-2 bg-white rounded-xl w-full">
                  <div className="flex items-center justify-center p-2 bg-white rounded-full">
                    <BiUser className="text-4xl text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full px-6">
                    <h1 className="font-medium font-sans text-xl text-primary">
                      Mindfullness
                    </h1>
                    <h1 className="font-normal font-sans text-md text-primary">
                      Category: Mental | Time: 2h
                    </h1>
                    <p className="font-sans font-medium text-md text-primary mt-8">
                      Engaging in mindful movement practices like yoga or Tai
                      Chi can help connect your body and mind while promoting
                      relaxation.
                    </p>
                  </div>
                  <div className="flex-items-start justify-start p-2">
                    <img src={Mental} alt="thumbnail" className="w-48" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-start w-full mb-8">
            <h1 className="font-sans font-medium text-xl">
              Meditation Progress
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-8">
            <div className="flex items-center justify-around w-full">
              <img src={Mind1} alt="" className="" />
              <div className="flex flex-col items-start justify-around gap-2">
                <h1 className="font-sans font-semibold text-black text-lg">
                  Meditation
                </h1>
                <h1 className="font-sans font-normal text-black text-md">
                  Meditation Session
                </h1>
              </div>
              <div className="flex items-center justify-center w-16 font-sans">
                <CircularProgressbar
                  value={percentage1}
                  text={`${percentage1}%`}
                  strokeWidth={11}
                  styles={buildStyles({
                    textColor: "purple",
                    pathColor: "purple",
                  })}
                />
              </div>
            </div>
            <div className="flex items-center justify-around w-full">
              <img src={Mind2} alt="" className="" />
              <div className="flex flex-col items-start justify-around gap-2">
                <h1 className="font-sans font-semibold text-black text-lg">
                  Meditation
                </h1>
                <h1 className="font-sans font-normal text-black text-md">
                  Meditation Session
                </h1>
              </div>
              <div className="flex items-center justify-center w-16 font-sans">
                <CircularProgressbar
                  value={percentage2}
                  text={`${percentage2}%`}
                  strokeWidth={11}
                  styles={buildStyles({
                    textColor: "orange",
                    pathColor: "orange",
                  })}
                />
              </div>
            </div>
            <div className="flex items-center justify-around w-full">
              <img src={Mind3} alt="" className="" />
              <div className="flex flex-col items-start justify-around gap-2">
                <h1 className="font-sans font-semibold text-black text-lg">
                  Meditation
                </h1>
                <h1 className="font-sans font-normal text-black text-md">
                  Meditation Session
                </h1>
              </div>
              <div className="flex items-center justify-center w-16 font-sans">
                <CircularProgressbar
                  value={percentage3}
                  text={`${percentage3}%`}
                  strokeWidth={11}
                  styles={buildStyles({
                    textColor: "blue",
                    pathColor: "blue",
                  })}
                />
              </div>
            </div>
            <div className="flex items-center justify-around w-full">
              <img src={Mind1} alt="" className="" />
              <div className="flex flex-col items-start justify-around gap-2">
                <h1 className="font-sans font-semibold text-black text-lg">
                  Meditation
                </h1>
                <h1 className="font-sans font-normal text-black text-md">
                  Meditation Session
                </h1>
              </div>
              <div className="flex items-center justify-center w-16 font-sans">
                <CircularProgressbar
                  value={percentage4}
                  text={`${percentage4}%`}
                  strokeWidth={11}
                  styles={buildStyles({
                    textColor: "purple",
                    pathColor: "purple",
                  })}
                />
              </div>
            </div>
          </div>
          <button className="w-full p-4 bg-black text-white font-sans font-medium text-md mt-8 rounded-xl hover:opacity-50 transition ease-in-out">
            Discover More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 w-full rounded-xl shadow-md">
        <div className="flex items-center justify-center w-1/3 h-full">
          <Bar data={data} options={options}></Bar>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <h1 className="font-sans font-bold text-6xl text-primary">50</h1>
          <p className="font-sans font-normal text-gray-400 text-md w-1/2 text-center">
            Journal with a consistent happy mood!
          </p>
          <button className="w-3/4 p-4 bg-black text-white font-sans font-medium text-sm mt-8 rounded-xl hover:opacity-50 transition ease-in-out">
            See Full Report
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="flex flex-wrap items-center justify-start h-[160px] gap-2 overflow-y-scroll w-3/4">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                className="w-[80px] hover:opacity-50 transition ease-in-out"
              >
                <img src={emoji.icon} alt={emoji.name} className="" />
              </button>
            ))}
          </div>
          <button className="w-3/4 p-4 bg-black text-white font-sans font-medium text-sm mt-4 rounded-xl hover:opacity-50 transition ease-in-out">
            Report Your Journal Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
