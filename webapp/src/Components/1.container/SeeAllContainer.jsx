/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { BsBookmarkPlusFill, BsBookmarkCheckFill } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";

export default function SeeAllContainer() {
  const { query, type } = useParams();
  const location = useLocation();
  const passedData = location.state?.data;
  const {
    bookmarkedMovies,
    addMovieBookmark,
    removeMovieBookmark,
    bookmarkedTvShows,
    addTvShowBookmark,
    removeTvShowBookmark,
  } = useBookmarks();
  const [ActiveBm, setActiveBm] = useState(false);

  return (
    <div className="flex flex-col my-4 mx-4 sm:mx-0">
      <div className="flex justify-between items-center relative title">{`all ${query} ${type}`}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4 md:pt-0">
        {passedData
          .filter((item) => item.backdrop_path)
          .map((item) => (
            <div key={item.id} className="relative">
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
              <NavLink to={`/details/${type}/${item.id}`}    aria-label="details">
                <img
                  className="rounded-md cursor-pointer"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                />
              </NavLink>
              <p className="text-md py-1 capitalize text-gray-300 flex items-center text-slim">
                <span>
                  {item.release_date
                    ? new Date(item.release_date).getFullYear()
                    : new Date(item.first_air_date).getFullYear()}
                </span>
                <LuDot className="text-xl text-gray-300" />
                <span className="flex items-center gap-x-1">
                  {item.title ? <MdLocalMovies /> : <PiTelevisionFill />}{" "}
                  {item.title ? "Movie" : "TvShow"}
                </span>
              </p>
              <h2 className="text-xl font-semibold max-w-[100%]">
                {item.title ? item.title : item.original_name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
