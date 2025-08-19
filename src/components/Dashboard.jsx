import Card from "./Card";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [timePeriod, setTimePeriod] = useState("day");

  function handleClick(e) {
    setTimePeriod("");

    const { value } = e.target;
    setTimePeriod(value);
    console.log(timePeriod);
  }

  return (
    <section className="bg-cust-Navy-900 rounded-xl font-rubik">
      <div className="bg-cust-Purple-600 rounded-xl px-6 py-7 flex items-center gap-4">
        <img
          className="rounded-full border-3 border-white w-18 h-auto"
          src="/image-jeremy.png"
          alt="Picture of Jeremy Robson"
        />
        <div className=" ">
          <h1 className="text-cust-Navy-200 text-sm font-light">Report for</h1>
          <h2 className="text-white text-2xl font-light">Jeremy Robson</h2>
        </div>
      </div>
      <nav className="flex justify-between gap-2 p-6 text-cust-Purple-500 font-light">
        <button
          className={`font-rubik font-normal cursor-pointer ${
            timePeriod === "day" ? "text-white" : ""
          }`}
          value="day"
          onClick={handleClick}
        >
          Daily
        </button>
        <button
          className={`font-rubik font-normal cursor-pointer ${
            timePeriod === "week" ? "text-white" : ""
          }`}
          value="week"
          onClick={handleClick}
        >
          Weekly
        </button>
        <button
          className={`font-rubik font-normal cursor-pointer ${
            timePeriod === "month" ? "text-white" : ""
          }`}
          value="month"
          onClick={handleClick}
        >
          Monthly
        </button>
      </nav>
    </section>
  );
}
