import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
export default function SideBar() {
  return (
    <div className="bg-blue-300 w-[10%] mx-2 my-2 h-[95vh] flex flex-col items-center justify-between">
      <div className="mt-5 ">
        <PiFilmReelFill className="w-[50px] h-[50px] text-red-500 cursor-pointer" />
      </div>

      <div className="  flex itmes-center flex-col gap-8 cursor-pointer ">
        <HiMiniSquares2X2 className="w-[35px] h-[35px] text-red-500" />
        <MdLocalMovies className="w-[35px] h-[35px] text-red-500" />
        <PiTelevisionSimpleFill className="w-[35px] h-[35px] text-red-500" />
        <FaBookmark className="w-[35px] h-[35px] text-red-500" />
      </div>

      <div className="mb-5 ">
      <PiFilmReelFill className="w-[30px] h-[30px] text-red-500 cursor-pointer" />
      </div>
    </div>
  );
}
