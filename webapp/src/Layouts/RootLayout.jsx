import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Avatar from "../Components/Assets/avatar-06.png";
export default function RootLayout() {
  return (
    <div className="flex ">
      <header>
        <div className="  h-[4rem] sm:mx-4 md:mr-0 sm:mt-4 md:mb-4  flex flex-row md:flex-col  md:w-[5rem] md:h-full  items-center justify-between bg-[#1d2741e6]   sm:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
          <nav className=" flex flex-col gap-2 ">
            <NavLink to="/">
              <PiFilmReelFill />
            </NavLink>
            <NavLink to="home">
              <HiMiniSquares2X2 />
            </NavLink>
            <NavLink to="movies">
              <MdLocalMovies />
            </NavLink>
            <NavLink to="tvseries">
              <PiTelevisionFill />
            </NavLink>
            <NavLink to="library">
              <FaBookmark />
            </NavLink>
          </nav>

          <div className=" md:mt-14 md:mb-4 ml-0 mr-4 md:mr-0">
            <img
              src={Avatar}
              alt="avatar"
              className="rounded-full w-[40px] h-[40px] border-[2px] border-spacing-1 border-white"
            />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

