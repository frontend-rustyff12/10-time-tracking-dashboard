import Card from "./Card";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState("daily");
  const [dataObj, setDataObj] = useState({
    Work: { current: "", previous: "" },
    Play: { current: "", previous: "" },
    Study: { current: "", previous: "" },
    Exercise: { current: "", previous: "" },
    Social: { current: "", previous: "" },
    "Self Care": { current: "", previous: "" },
  });

  function handleClick(e) {
    setTimePeriod("");

    const { value } = e.target;
    setTimePeriod(value);
  }

  useEffect(() => {
    async function getData() {
      const url = "/data.json";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const res = await response.json();

        const updatedData = {};
        for (const item of res) {
          updatedData[item.title] = {
            current: item.timeframes[timePeriod].current,
            previous: item.timeframes[timePeriod].previous,
          };
        }

        setDataObj(updatedData);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, [timePeriod]);

  const cardElements = Object.entries(dataObj).map(([topic, values]) => (
    <Card
      key={topic}
      topic={topic}
      curr={values.current}
      prev={values.previous}
      time={timePeriod}
    />
  ));

  return (
    <section className="md:grid md:grid-cols-4 md:gap-4 md:w-8/12 ">
      <div className="bg-cust-Navy-900 rounded-xl font-rubik ">
        <div className="bg-cust-Purple-600 rounded-xl px-6 py-7 flex items-center gap-4 md:flex md:flex-col md:items-start">
          <img
            className="rounded-full border-3 border-white w-18 h-auto"
            src="/image-jeremy.png"
            alt="Picture of Jeremy Robson"
          />
          <div className=" ">
            <h1 className="text-cust-Navy-200 text-sm font-light">
              Report for
            </h1>
            <h2 className="text-white text-2xl font-light">Jeremy Robson</h2>
          </div>
        </div>
        <nav className="flex justify-between gap-2 p-6 text-cust-Purple-500 font-light md:flex md:flex-col md:items-start">
          <button
            className={`font-rubik font-normal cursor-pointer ${
              timePeriod === "daily" ? "text-white" : ""
            }`}
            value="daily"
            onClick={handleClick}
          >
            Daily
          </button>
          <button
            className={`font-rubik font-normal cursor-pointer ${
              timePeriod === "weekly" ? "text-white" : ""
            }`}
            value="weekly"
            onClick={handleClick}
          >
            Weekly
          </button>
          <button
            className={`font-rubik font-normal cursor-pointer ${
              timePeriod === "monthly" ? "text-white" : ""
            }`}
            value="monthly"
            onClick={handleClick}
          >
            Monthly
          </button>
        </nav>
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-4 mt-6 md:mt-0  md:col-start-2 md:col-end-5 md:grid md:grid-cols-3 md:grid-rows-2">
        {cardElements}
      </div>
    </section>
  );
}
