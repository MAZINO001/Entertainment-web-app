import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import Avatar from "../Assets/avatar-06.png";
export default function SideBar() {
  return (
    <div className="w-[5%] mx-4 my-4 h-full flex flex-col items-center justify-between bg-gray-700   rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
      <div className="mt-5 mb-5 ">
        <PiFilmReelFill className="w-[50px] h-[50px] fill-red-500 cursor-pointer" />
      </div>

      <div className="  flex itmes-center flex-col gap-[4rem] cursor-pointer text-black ">
        <HiMiniSquares2X2 className="w-[2rem] h-[2rem] fill-red-500" />
        <MdLocalMovies className="w-[2rem] h-[2rem] " />
        <PiTelevisionSimpleFill className="w-[2rem] h-[2rem] " />
        <FaBookmark className="w-[2rem] h-[2rem] " />
      </div>

      <div className=" mt-5 mb-5 ">
        <img
          src={Avatar}
          alt="avatar"
          className="rounded-full w-[40px] h-[40px] border-[2px] border-spacing-1 border-red-500"
        />
      </div>
    </div>
  );
}
