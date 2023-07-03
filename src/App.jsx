import "./App.css";
import reaction from "./assets/icon-reaction.svg";
import memory from "./assets/icon-memory.svg";
import verbal from "./assets/icon-verbal.svg";
import visual from "./assets/icon-visual.svg";

function App() {
  const datas = [
    {
      icon: reaction,
      title: "Reaction",
      score: "80",
      color: "text-rose-500",
      bg: "#fff1f2",
    },
    {
      icon: memory,
      title: "Memory",
      score: "92",
      color: "text-amber-500",
      bg: "#fffbeb",
    },
    {
      icon: verbal,
      title: "Verbal",
      score: "61",
      color: "text-teal-500",
      bg: "#f0fdfa",
    },
    {
      icon: visual,
      title: "Visual",
      score: "72",
      color: "text-blue-700",
      bg: "#eff6ff",
    },
  ];

  return (
    <main className="flex flex-col rounded-t-0 bg-white min-w-[375px] sm:rounded-3xl sm:mx-auto sm:drop-shadow-xl sm:flex-row sm:w-[500px] md:w-[600px] dark:bg-slate-600">
      <div className="flex flex-col items-center bg-gradient-to-b  from-[#7857ff] to-[#2e2be9] px-4 pb-5 rounded-b-3xl sm:rounded-3xl sm:w-1/2 dark:bg-gradient-to-b dark:from-gray-950 dark:to-slate-700">
        <p className="text-slate-300 py-4 sm:py-6 sm:text-lg">Your result</p>
        <div className="w-32 h-32 sm:w-36 sm:h-36 sm:mt-2 md:w-40 md:h-40 md:mb-5 bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] p-2 rounded-full dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-800">
          <p className="text-white font-bold text-5xl sm:text-6xl md:text-7xl pt-4 sm:pt-6">
            76
          </p>
          <small className="text-slate-400 sm:text-base md:text-md sm:mt-2">
            of 100
          </small>
        </div>
        <p className="text-white pt-4 pb-1  sm:pb-3 text-xl sm:text-2xl">
          Great
        </p>
        <p className="w-4/5 text-slate-300 leading-5">
          You scored higher than 65% of the people who have taken the tests.
        </p>
      </div>
      <div className="bg-white p-6 sm:p- min-[376px]:rounded-3xl sm:w-1/2 dark:bg-slate-600">
        <h3 className="text-left sm:text-xl text-[#303b5a] font-bold text-lg pb-3 dark:text-gray-100">
          Summary
        </h3>
        {/* Summary list goes here */}
        <div className="grid grid-col gap-1">
          {datas.map((data, index) => (
            <div
              key={data.title}
              style={{ backgroundColor: `${data.bg}` }}
              className={`flex items-center justify-between p-3 border border-1 border-zinc-100 w-full my-1 rounded-md last:mb-4`}
            >
              <button
                disabled={true}
                className="inline-flex text-lg items-center"
              >
                <img
                  src={data.icon}
                  alt={`icon-${index}`}
                  className="w-5 h-auto mr-2"
                />
                <span className={`font-medium ${data.color}`}>{data.title}</span>
              </button>
              <p className="text-slate-400">
                <span className="text-[#303b5a] font-bold">{data.score} </span>/
                100
              </p>
            </div>
          ))}
        </div>
        <button className="text-white w-full bg-[#303b5a] mt-3 py-3 rounded-full hover:bg-[#2e2be9] dark:bg-slate-800 dark:hover:bg-slate-950">
          Continue
        </button>
      </div>
    </main>
  );
}

export default App;
