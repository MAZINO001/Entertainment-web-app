/* eslint-disable no-unused-vars */
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loaders/Loader";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SearchContainer() {
  const {
    bookmarkedMovies,
    addMovieBookmark,
    removeMovieBookmark,
    bookmarkedTvShows,
    addTvShowBookmark,
    removeTvShowBookmark,
  } = useBookmarks();
  const [ActiveBm, setActiveBm] = useState(false);
  const [type, settype] = useState("Movies");

  const { query, page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [Data, setData] = useState(null);
  const [results, setResults] = useState(null);
  const [pages, setPages] = useState(null);

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
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=${currentPage}`,
      options
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        setPages(responseData.total_pages);
        setResults(responseData.total_results);
      })
      .catch((err) => console.error(err));
  }, [query, currentPage]);

  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
      navigate(`/searchcontainer/${query}/${currentPage + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/searchcontainer/${query}/${currentPage - 1}`);
    }
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex items-center justify-between">
        <h2 className="title mt-2 mb-4">
          Found {results} results for {`'${query}'`}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-8  justify-items-center ">
        {Array.isArray(Data) ? (
          Data.filter((item) => item.backdrop_path).map((item) => (
            <div key={item.id} className="mb-3 relative">
              {bookmarkedMovies.includes(item.id) ||
              bookmarkedTvShows.includes(item.id) ? (
                <BsBookmarkCheckFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    item.title
                      ? removeMovieBookmark(item.id)
                      : removeTvShowBookmark(item.id); // Remove bookmark
                  }}
                />
              ) : (
                <BsBookmarkPlusFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    item.title
                      ? addMovieBookmark(item.id)
                      : addTvShowBookmark(item.id); // Add bookmark
                  }}
                />
              )}
              {item.media_type === "movie" ? (
                <NavLink to={`/seeDetails/Movies/${item.id}`}>
                  <LazyLoadImage
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </NavLink>
              ) : (
                <NavLink to={`/seeDetails/TvShows/${item.id}`}>
                  <LazyLoadImage
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </NavLink>
              )}
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
          <Loader />
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
              {currentPage} / {pages}
            </div>
            <button
              className={`${
                page === pages
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded flex justify-center gap-[1rem] items-center`}
              onClick={handleNextPage}
              disabled={page === pages}
            >
              <IoArrowForwardOutline />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
