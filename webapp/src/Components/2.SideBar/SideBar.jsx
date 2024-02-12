/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import Avatar from "../Assets/avatar-06.png";
export default function SideBar() {
  return (
    <div className="  h-full flex flex-row md:flex-col  rounded-md  items-center justify-between bg-[#1d2741e6] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 md:px-2 md:py-0 py-4 m-0 sm:m-4 md:mr-0 sm:mb-0">
      <div className="md:mt-4 md:ml-0 md:mb-14 ml-4 mr-0 items-center ">
        <NavLink to="/">
          <PiFilmReelFill className="w-[50px] h-[50px] text-[#FC4747] cursor-pointer" />
        </NavLink>
      </div>

      <div className="  flex items-center flex-row md:flex-col  sm:gap-[3.5rem] gap-[2rem] cursor-pointer text-black ">
        <NavLink to="/">
          <HiMiniSquares2X2 className="w-[1.7rem] h-[1.7rem] text-[#5A6A90] " />
        </NavLink>
        <NavLink to="/movies">
          <MdLocalMovies className="w-[1.7rem] h-[1.7rem] text-[#5A6A90]" />
        </NavLink>
        <NavLink to="/tvshows">
          <PiTelevisionFill className="w-[1.7rem] h-[1.7rem] text-[#5A6A90]" />
        </NavLink>
        <NavLink to="/library">
          <FaBookmark className="w-[1.7rem] h-[1.7rem] text-[#5A6A90]" />
        </NavLink>
      </div>

      <div className=" md:mt-14 md:mb-4 ml-0 mr-4 md:mr-0">
        <img
          src={Avatar}
          alt="avatar"
          className="rounded-full w-[40px] h-[40px] border-[2px] border-spacing-1 border-white"
        />
      </div>
    </div>
  );
}
