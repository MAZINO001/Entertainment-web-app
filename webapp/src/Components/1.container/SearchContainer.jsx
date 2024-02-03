/* eslint-disable react/prop-types */
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { useState } from "react";
export default function SearchContainer({
  Results,
  PageNum,
  setPageNum,
  Pages,
  Data,
  Query,
}) {
  const TotalResults = Results;
  const TotalPages = Pages;
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setPageNum(PageNum + 1);
    setCurrentPage(CurrentPage + 1);
  };
    const handlePrevPage = () => {
    setPageNum(PageNum - 1);
    setCurrentPage(CurrentPage - 1);
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center justify-between">
        <h2 className="title mt-2 mb-4">
          Found {TotalResults} results for {`'${Query}'`}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-8  justify-items-center ">
        {/* <div className="grid grid-cols-4 justufy-center"> */}
        {Array.isArray(Data) ? (
          Data.filter((item) => item.backdrop_path).map((item) => (
            <div key={item.id} className="mb-3 ">
              <img
                className="w-full h-auto rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="Poster"
              />
              <p className="text-sm py-1 capitalize text-gray-300 flex items-center  text-slim ">
                <span>
                  {item.media_type === "tv"
                    ? new Date(item.first_air_date).getFullYear()
                    : new Date(item.release_date).getFullYear()}
                </span>

                <LuDot className="text-xl text-gray-300 " />
                <span className="flex items-center gap-x-1">
                  {item.media_type === "tv" ? (
                    <PiTelevisionFill />
                  ) : (
                    <MdLocalMovies />
                  )}
                  {item.media_type === "tv" ? "TV Series" : item.media_type}
                </span>
              </p>
              <h2 className="text-xl font-semibold  max-w-[100%]">
                {item.media_type === "tv" ? item.name : item.title}
              </h2>
            </div>
          ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
      <div className="flex justify-center gap-[1rem] mb-4">
        {Query === "" ? (
          ""
        ) : (
          <>
            <button
              className={`${
                PageNum <= 1 ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center`}
              onClick={handlePrevPage}
              disabled={PageNum <= 1}
            >
              <IoArrowBackOutline />
            </button>
            <div className="bg-blue-500 px-4 rounded flex justify-center items-center tracking-wide">
              {CurrentPage} / {TotalPages}
            </div>
            <button
              className={`${
                CurrentPage === TotalPages
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center`}
              onClick={handleNextPage}
              disabled={CurrentPage === TotalPages}
            >
              <IoArrowForwardOutline />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
