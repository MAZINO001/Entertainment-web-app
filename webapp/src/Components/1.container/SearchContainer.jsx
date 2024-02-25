/* eslint-disable no-unused-vars */
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function SearchContainer() {
  const { query, page } = useParams();
  console.log("Query:", query);
  console.log("Page Number:", page);

  const [PageNum, setPageNum] = useState(page);
  const [Data, setData] = useState(null);
  const [Results, setResults] = useState(null);
  const [Pages, setPages] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        setPages(responseData.total_pages);
        setResults(responseData.total_results);
      })
      .catch((err) => console.error(err));
  }, [query, page]);

  const TotalResults = Results;
  const TotalPages = Pages;
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setPageNum(page);
    setCurrentPage(page + 1);
  };

  const handlePrevPage = () => {
    setPageNum(page);
    setCurrentPage(page - 1);
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center justify-between">
        <h2 className="title mt-2 mb-4">
          Found {TotalResults} results for {`'${query}'`}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-8  justify-items-center ">
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
        {query === "" ? (
          ""
        ) : (
          <>
            <button
              className={`${
                page <= 1 ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center`}
              onClick={handlePrevPage}
              disabled={page <= 1}
            >
              <IoArrowBackOutline />
            </button>
            <div className="bg-blue-500 px-4 rounded flex justify-center items-center tracking-wide">
              {page} / {TotalPages}
            </div>
            <button
              className={`${
                page === TotalPages
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center`}
              onClick={handleNextPage}
              disabled={page === TotalPages}
            >
              <IoArrowForwardOutline />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
