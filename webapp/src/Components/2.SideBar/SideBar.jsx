/* eslint-disable react/prop-types */
import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import Avatar from "../Assets/avatar-06.png";
export default function SideBar({
  activeMiniSquares,
  activeLocalMovies,
  activeTelevision,
  activeBookmark,
  setActiveMiniSquares,
  setActiveLocalMovies,
  setActiveTelevision,
  setActiveBookmark,
}) {
  const handleDeActive = () => {
    setActiveMiniSquares(false);
    setActiveLocalMovies(false);
    setActiveTelevision(false);
    setActiveBookmark(false);
  };

  return (
    <div className=" lg:w-[5rem]  md:h-[5rem] lg:h-full mx-4 my-4  flex lg:flex-col md:flex-row items-center justify-between bg-gray-700   rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
      <div className="lg:mt-4 lg:mb-14 items-center lg:ml-0 md:ml-4">
        <PiFilmReelFill className="w-[50px] h-[50px] fill-red-500 cursor-pointer" />
      </div>

      <div className="  flex items-center lg:flex-col flex-row gap-[3.5rem] cursor-pointer text-black ">
        <HiMiniSquares2X2
          className={`w-[2rem] h-[2rem] ${
            activeMiniSquares ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveMiniSquares(true);
          }}
        />

        <MdLocalMovies
          className={`w-[2rem] h-[2rem] ${
            activeLocalMovies ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveLocalMovies(true);
          }}
        />
        <PiTelevisionSimpleFill
          className={`w-[2rem] h-[2rem] ${
            activeTelevision ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveTelevision(true);
          }}
        />
        <FaBookmark
          className={`w-[2rem] h-[2rem] ${
            activeBookmark ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveBookmark(true);
          }}
        />
      </div>

      <div className=" lg:mt-14 lg:mb-4 items-center md:mr-4 lg:mr-0">
        <img
          src={Avatar}
          alt="avatar"
          className="rounded-full w-[40px] h-[40px] border-[2px] border-spacing-1 border-red-500"
        />
      </div>
    </div>
  );
}
