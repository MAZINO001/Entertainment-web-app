/* eslint-disable react/prop-types */
import { MdLocalMovies } from "react-icons/md";
import Loader from "../../Loaders/Loader";
import { LuDot } from "react-icons/lu";
import { PiTelevisionFill } from "react-icons/pi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  fetchMoviesTypeData,
  fetchTvShowsTypeData,
} from "../../api/fetchTypeData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
export default function ResultContainer() {
  const {
    bookmarkedMovies,
    addMovieBookmark,
    removeMovieBookmark,
    bookmarkedTvShows,
    addTvShowBookmark,
    removeTvShowBookmark,
  } = useBookmarks();
  // eslint-disable-next-line no-unused-vars
  const [ActiveBm, setActiveBm] = useState(false);
  const { id, page, type } = useParams();
  const handleFnType = async (id, page) => {
    if (type === "Movies") {
      return await fetchMoviesTypeData(id, page);
    } else {
      return await fetchTvShowsTypeData(id, page);
    }
  };

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const { data: moviesData, isLoading } = useQuery({
    queryKey: ["movies", id, page],
    queryFn: () => handleFnType(id, page),
  });

  const navigate = useNavigate();
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    const nextPage = parseInt(page) + 1;
    navigate(`/results/${type}/${id}/${nextPage}`);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    const nextPage = parseInt(page) - 1;
    navigate(`/results/${type}/${id}/${nextPage}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative pb-10 mx-4 sm:mx-0">
      {moviesData
        .filter((item) => !!item.backdrop_path)
        .map((item) => (
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
            <p className=" text-md md:text-sm py-1 capitalize text-gray-300 flex items-center text-slim ">
              <span>
                {new Date(
                  item.release_date || item.first_air_date
                ).getFullYear()}
              </span>

              <LuDot className="text-xl text-gray-300 " />
              <span className="flex items-center gap-x-1">
                {item.title ? (
                  <>
                    <MdLocalMovies /> Movie
                  </>
                ) : (
                  <>
                    <PiTelevisionFill /> Tv Series
                  </>
                )}
              </span>
            </p>
            <h2 className="text-lg md:text-xl font-semibold max-w-[100%]">
              {item.title || item.name}
            </h2>
          </div>
        ))}
      <div className="flex justify-center items-center gap-4 centered-div">
        <button onClick={handlePrevPage} className="bg-red-500 px-4 capitalize">
          next
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 px-4 capitalize"
        >
          Page
        </button>
      </div>
    </div>
  );
}
