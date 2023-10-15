const FrontPage = () => {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center">
      <h1 className="text-6xl absolute top-60 font-bold text-white">
        Hestevæddeløbet
      </h1>
      <div className="absolute top-96 mb-20 flex flex-col">
        <button className="bg-slate-400 text-white text-2xl font-bold py-3 px-6 rounded-full mb-10 whitespace-nowrap shadow-lg subpixel-antialiased hover:bg-slate-300 active:bg-slate-200">
          Spil Offline
          {
            //<Link to="/game" className="text-white">}
          }
        </button>
        <button className="bg-slate-400 text-white text-2xl font-bold py-3 px-6 rounded-full whitespace-nowrap shadow-lg hover:bg-gray-300 active:bg-slate-200">
          Spil Online
          {
            //<Link to="/game" className="text-white">}
          }
        </button>
        <button className="bg-slate-700 text-gray-500 text-2xl font-bold py-3 px-6 rounded-full mt-10 whitespace-nowrap shadow-lg">
          Leaderboard
          {
            //<Link to="/game" className="text-white">}
          }
        </button>
      </div>
      <div>
        {/*<img
          src="https://www.publicdomainpictures.net/pictures/80000/nahled/horse-racing-neck-and-neck.jpg"
          alt="hestevæddeløb"
          className="object-cover h-screen w-screen" 
        />*/}
      </div>
    </div>
  );
};

export default FrontPage;
