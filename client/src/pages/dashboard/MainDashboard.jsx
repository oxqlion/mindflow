import { BiUser } from "react-icons/bi";
import Mental from "../../assets/mental.png";
import Mind1 from "../../assets/mind1.png";
import Mind2 from "../../assets/mind2.png";
import Mind3 from "../../assets/mind3.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MainDashboard = () => {
  const percentage1 = 57;
  const percentage2 = 62;
  const percentage3 = 35;
  const percentage4 = 58;

  return (
    <div className="flex flex-col items-start justify-center w-full p-8 gap-4">
      <div className="flex flex-col w-full items-start justify-start">
        <p className="font-sans font-semibold text-black text-lg">
          Hi, Alexandra!
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
              />
            </div>
            <div className="flex flex-col items-start justify-start p-4 w-full gap-4">
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
    </div>
  );
};

export default MainDashboard;
