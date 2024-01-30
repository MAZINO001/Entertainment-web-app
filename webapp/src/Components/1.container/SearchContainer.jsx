/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa"; // Corrected import
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
export default function SearchContainer({
  query,
  onClose,
  setQuery,
  Data,
  AllData,
  setPageNum,
  PageNum,
}) {
  const handleContainerClose = () => {
    onClose();
    setQuery("");
  };
  const handleNextPage = () => {
    setPageNum(PageNum + 1);
  };
  const handlePrevPage = () => {
    setPageNum(PageNum - 1);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="title mt-2">
          Found {AllData.total_results} results for {`'${query}'`}
        </h2>
        <button onClick={handleContainerClose} className="text-lg">
          <FaTimes />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
      {/* <div className="grid grid-cols-4 justufy-center"> */}
        {Array.isArray(Data) ? (
          Data.filter((item) => item.backdrop_path).map((item) => (
            <div key={item.id} className="mb-6">
              <img
                className="w-[13rem] h-auto rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="Poster"
              />
              <p className="text-sm py-1 capitalize text-gray-300 flex items-center ">
                <span>
                  {item.media_type === "tv"
                    ? item.first_air_date
                    : item.release_date}
                </span>

                <LuDot className="text-xl text-gray-300 " />
                <span className="flex items-center gap-1">
                  {item.media_type === "tv" ? (
                    <PiTelevisionSimpleFill />
                  ) : (
                    <MdLocalMovies />
                  )}
                  {item.media_type}
                </span>
              </p>
              <h2 className="text-xl font-semibold ">
                {item.media_type === "tv" ? item.name : item.title}
              </h2>
            </div>
          ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
      <div className="flex justify-center gap-[1rem]">
        <button
          className={` ${
            PageNum <= 1 ? " bg-blue-300" : "bg-blue-500"
          }  text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center`}
          onClick={handlePrevPage}
          disabled={PageNum <= 1}
        >
          <IoArrowBackOutline />
        </button>
        <div className="bg-blue-500 px-4 rounded flex justify-center items-center tracking-wide">
          {AllData.total_pages}
        </div>
        <button
          className="bg-blue-500  text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center"
          onClick={handleNextPage}
        >
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
}
