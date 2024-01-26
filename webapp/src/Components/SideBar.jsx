import { PiFilmReelFill } from "react-icons/pi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
export default function SideBar() {
  return (
    <div className="w-[10%] mx-2 my-2 h-[95vh] flex flex-col items-center justify-between bg-gray-700">
      <div className="mt-5 ">
        <PiFilmReelFill className="w-[50px] h-[50px] fill-red-500 cursor-pointer" />
      </div>

      <div className="  flex itmes-center flex-col gap-[4rem] cursor-pointer ">
        <HiMiniSquares2X2 className="w-[30px] h-[30px] fill-red-500" />
        <MdLocalMovies className="w-[30px] h-[30px] " />
        <PiTelevisionSimpleFill className="w-[30px] h-[30px] " />
        <FaBookmark className="w-[30px] h-[30px] " />
      </div>

      <div className="mb-5 ">
        <PiFilmReelFill className="w-[30px] h-[30px]  cursor-pointer" />
      </div>
    </div>
  );
}
