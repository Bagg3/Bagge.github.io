import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-600">
      <h1 className="mb-14 text-6xl font-bold text-white">Hestevæddeløbet</h1>
      <Link to="/setup">
        <button className="mb-10 h-16 w-64 rounded-full bg-slate-400 text-2xl font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200">
          Spil Offline
        </button>
      </Link>

      <Link to="/setup">
        <button className="h-16 w-64 rounded-full bg-slate-400 text-2xl font-bold text-white shadow-lg hover:bg-gray-300 active:bg-slate-200">
          Spil Online
        </button>
      </Link>

      <button className="mt-10 h-16 w-64 rounded-full bg-slate-700 text-2xl font-bold text-gray-500">
        Leaderboard
        {
          //<Link to="/game" className="text-white">}
        }
      </button>
    </div>
  );
};

export default FrontPage;
