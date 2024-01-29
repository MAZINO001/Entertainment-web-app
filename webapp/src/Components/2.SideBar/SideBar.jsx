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
  handleSearchContainerClose,
}) {
  const handleDeActive = () => {
    setActiveMiniSquares(false);
    setActiveLocalMovies(false);
    setActiveTelevision(false);
    setActiveBookmark(false);
  };

  return (
    <div className="  h-[4rem] sm:mx-4 md:mr-0 sm:mt-4 md:mb-4  flex flex-row md:flex-col md:w-[5rem] md:h-full  items-center justify-between bg-gray-700   sm:rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
      <div className="md:mt-4 md:ml-0 md:mb-14 ml-4 mr-0 items-center ">
        <PiFilmReelFill className="w-[50px] h-[50px] fill-red-500 cursor-pointer" />
      </div>

      <div className="  flex items-center flex-row md:flex-col  sm:gap-[3.5rem] gap-[2rem] cursor-pointer text-black ">
        <HiMiniSquares2X2
          className={`w-[2rem] h-[2rem] ${
            activeMiniSquares ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveMiniSquares(true);
            handleSearchContainerClose(state => !state)

          }}
        />

        <MdLocalMovies
          className={`w-[2rem] h-[2rem] ${
            activeLocalMovies ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveLocalMovies(true);
            handleSearchContainerClose(state => !state)
          }}
        />
        <PiTelevisionSimpleFill
          className={`w-[2rem] h-[2rem] ${
            activeTelevision ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveTelevision(true);
            handleSearchContainerClose(state => !state)
          }}
        />
        <FaBookmark
          className={`w-[1.5rem] h-[1.5rem] ${
            activeBookmark ? "fill-red-500" : ""
          }`}
          onClick={() => {
            handleDeActive();
            setActiveBookmark(true);
            handleSearchContainerClose(state => !state)
          }}
        />
      </div>

      <div className=" md:mt-14 md:mb-4 ml-0 mr-4 md:mr-0">
        <img
          src={Avatar}
          alt="avatar"
          className="rounded-full w-[40px] h-[40px] border-[2px] border-spacing-1 border-red-500"
        />
      </div>
    </div>
  );
}
