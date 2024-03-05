/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
// import { FaBookmark } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import Avatar from "../Assets/avatar-06.png";
export default function SideBar() {
  const { pathname } = useLocation();
  return (
    <div className="  h-full flex flex-row md:flex-col   rounded-none sm:rounded-md  items-center justify-between bg-[#1d2741e6] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 md:px-2 md:py-0 py-4 m-0 sm:m-4  md:mr-0 sm:mb-0 sticky md:top-[16px] top-[0px] z-40">
      <div className="md:mt-4 md:ml-0 md:mb-14 ml-4 mr-0 items-center">
        <NavLink to="/">
          <PiFilmReelFill className="w-[40px] h-[40px]  sm:w-[50px] sm:h-[50px] text-[#FC4747] cursor-pointer" />
        </NavLink>
      </div>

      <div className="  flex items-center flex-row md:flex-col  sm:gap-[3.5rem] gap-[3.3rem] cursor-pointer text-black ">
        <NavLink to="/">
          <HiMiniSquares2X2
            className={`w-[1.4rem] h-[1.4rem] sm:w-[1.7rem] sm:h-[1.7rem] ${
              pathname === "/" ? "text-[#FC4747]" : "text-[#5A6A90]"
            }`}
          />
        </NavLink>
        <NavLink to="/movies">
          <MdLocalMovies
            className={`w-[1.4rem] h-[1.4rem] sm:w-[1.7rem] sm:h-[1.7rem] ${
              pathname === "/movies" ? "text-[#FC4747]" : "text-[#5A6A90]"
            }`}
          />
        </NavLink>
        <NavLink to="/tvshows">
          <PiTelevisionFill
            className={`w-[1.4rem] h-[1.4rem] sm:w-[1.7rem] sm:h-[1.7rem] ${
              pathname === "/tvshows" ? "text-[#FC4747]" : "text-[#5A6A90]"
            }`}
          />
        </NavLink>
        <NavLink to="/library">
          <IoMdBookmark
            className={`w-[1.4rem] h-[1.4rem] sm:w-[1.7rem] sm:h-[1.7rem] ${
              pathname === "/library" ? "text-[#FC4747]" : "text-[#5A6A90]"
            }`}
          />
        </NavLink>
      </div>

      {/* <div className=" md:mt-14 md:mb-4 ml-0 mr-4 md:mr-0"> */}
      <div className=" md:mt-14 md:mb-4 ml-2 mr-3  sm:ml-0 sm:mr-4  md:mr-0">
        <img
          src={Avatar}
          alt="avatar"
          className="rounded-full w-[30px] h-[30px]  sm:w-[40px] sm:h-[40px] border-[2px] border-spacing-1 border-white"
        />
      </div>
    </div>
  );
}
