import { Link } from 'react-router-dom';
import CoverArt from '../images/cover-art.jpeg';

const FrontPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
      <h1 className="text-6xl font-bold text-[#f3f3f3]">Hestevæddeløbet</h1>
      <img
        src={CoverArt}
        className="my-7 aspect-square w-[20%] rounded-full bg-cover bg-center shadow-lg"
        alt="Cover Art"
      />
      <Link to="/setup">
        <button className="mb-7 h-16 w-64 rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]">
          Spil Offline
        </button>
      </Link>

      <Link to="/setup">
        <button className="mb-7 h-16 w-64 rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]">
          Spil Online
        </button>
      </Link>

      <button className="{//Color is #d65639 when active} h-16 w-64 rounded-full bg-[#8b8b8b] text-xl font-bold text-[#e4e4e4]">
        Leaderboard
      </button>
    </div>
  );
};

export default FrontPage;
