import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import Avatar from "../Assets/avatar-06.png";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../containerFolder/Home";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Library from "./Library";

export default function SideBar() {
  const [activeMiniSquares, setActiveMiniSquares] = useState(false);
  const [activeLocalMovies, setActiveLocalMovies] = useState(false);
  const [activeTelevision, setActiveTelevision] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  const handleToggling = () => {
    console.log("hello");
    if (activeMiniSquares) {
      return <Link to="/" />;
    } else if (activeLocalMovies) {
      return <Link to="movies" />;
    } else if (activeTelevision) {
      return <Link to="tvshows" />;
    } else {
      return <Link to="library" />;
    }
  };

  return (
    <Router>
      <div className="w-[5%] h-full mx-4 my-4  flex flex-col items-center justify-between bg-gray-700   rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <div className="mt-4 mb-14 ">
          <PiFilmReelFill className="w-[50px] h-[50px] fill-red-500 cursor-pointer" />
        </div>

        <div className="  flex items-center flex-col gap-[3.5rem] cursor-pointer text-black ">
          <HiMiniSquares2X2
            className={`w-[2rem] h-[2rem] ${
              activeMiniSquares ? "fill-red-500" : ""
            }`}
            onClick={() => {
              handleToggling();
              setActiveMiniSquares(true);
            }}
          />

          <MdLocalMovies
            className={`w-[2rem] h-[2rem] ${
              activeLocalMovies ? "fill-red-500" : ""
            }`}
            onClick={() => {
              handleToggling();
              setActiveLocalMovies(true);
            }}
          />
          <PiTelevisionSimpleFill
            className={`w-[2rem] h-[2rem] ${
              activeTelevision ? "fill-red-500" : ""
            }`}
            onClick={() => {
              handleToggling();
              setActiveTelevision(true);
            }}
          />
          <FaBookmark
            className={`w-[2rem] h-[2rem] ${
              activeBookmark ? "fill-red-500" : ""
            }`}
            onClick={() => {
              handleToggling();
              setActiveBookmark(true);
            }}
          />
        </div>

        <div className=" mt-14 mb-4 ">
          <img
            src={Avatar}
            alt="avatar"
            className="rounded-full w-[40px] h-[40px] border-[2px] border-spacing-1 border-red-500"
          />
        </div>
      </div>

      <Router>
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={TvShows} />
        <Route path="/library" component={Library} />
      </Router>
    </Router>
  );
}
