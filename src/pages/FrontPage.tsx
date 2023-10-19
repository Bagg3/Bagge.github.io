import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-slate-600">
      <h1 className="text-6xl top-56 font-bold text-white mb-10">
        Hestevæddeløbet
      </h1>
      <Link to="/setup">
        <button className="bg-slate-400 text-white text-2xl font-bold rounded-full w-64 h-16 mb-10 shadow-lg hover:bg-slate-300 active:bg-slate-200">
          Spil Offline
        </button>
      </Link>

      <Link to="/setup">
        <button className="bg-slate-400 text-white text-2xl font-bold w-64 h-16 rounded-full shadow-lg hover:bg-gray-300 active:bg-slate-200">
          Spil Online
        </button>
      </Link>

      <button className="bg-slate-700 text-gray-500 text-2xl font-bold w-64 h-16 rounded-full mt-10">
        Leaderboard
      </button>
    </div>
  );
};

export default FrontPage;
