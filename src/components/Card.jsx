export default function Card({ topic, curr, prev, time }) {
  const bgColor =
    topic === "Work"
      ? "bg-cust-Orange-300"
      : topic === "Play"
      ? "bg-cust-Blue-300"
      : topic === "Study"
      ? "bg-cust-Pink-400"
      : topic === "Exercise"
      ? "bg-cust-Green-400"
      : topic === "Social"
      ? "bg-cust-Purple-700"
      : topic === "Self Care"
      ? "bg-cust-Yellow-300"
      : "";

  const bgImage =
    topic === "Work"
      ? "bg-[url('/icon-work.svg')]"
      : topic === "Play"
      ? "bg-[url('/icon-play.svg')]"
      : topic === "Study"
      ? "bg-[url('/icon-study.svg')]"
      : topic === "Exercise"
      ? "bg-[url('/icon-exercise.svg')]"
      : topic === "Social"
      ? "bg-[url('/icon-social.svg')]"
      : topic === "Self Care"
      ? "bg-[url('/icon-self-care.svg')]"
      : "";

  const timeText =
    time === "day"
      ? "Yesterday"
      : time === "week"
      ? "Last Week"
      : time === "month"
      ? "Last Month"
      : "";

  return (
    <article
      className={`${bgColor} ${bgImage} bg-no-repeat bg-[top_right_1rem] pt-10 rounded-2xl text-white`}
    >
      <div className="bg-cust-Navy-900 rounded-xl p-6 flex flex-col gap-2 hover:bg-cust-Purple-600 cursor-pointer">
        <div className="flex justify-between items-center font-bold">
          <h2 className="font-bold md:text-sm lg:text-base">{topic}</h2>
          <p className="text-xl md:text-base lg:text-xl">...</p>
        </div>
        <div className="flex justify-between items-center md:flex md:flex-col md:items-start">
          <h3 className="text-3xl md:text-base lg:text-3xl">{curr}hrs</h3>
          <p className="text-cust-Navy-200 md:text-sm lg:text-base">
            {timeText} - {prev}hrs
          </p>
        </div>
      </div>
    </article>
  );
}
