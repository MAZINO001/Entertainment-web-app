/* eslint-disable no-unused-vars */
import { fetchTMDbDataMovies } from "../../api/FetchDataMovie";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loaders/Loader";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Trending() {
  const { bookmarkedMovies, addMovieBookmark, removeMovieBookmark } =
    useBookmarks();

  const [ActiveBm, setActiveBm] = useState(false);
  const [type, settype] = useState("Movies");
  const [query, setquery] = useState("Trending");

  const {
    data: Trending,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Trending"],
    queryFn: () => fetchTMDbDataMovies("trending"),
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className=" flex flex-col">
      <div className="flex justify-between items-center relative">
        <h2 className="title">Trending</h2>
        <span className="typespan">Movies</span>
        <NavLink
          to={`all/${type}/${query}`}
          state={{ data: Trending }}
          aria-label="all"
          className="text-md tracking-wider  sm:text-lg uppercase text-[#FC4747]  rounded-md"

        >
          see all
        </NavLink>
      </div>
      <div className=" grid grid-cols-[repeat(10,_1fr)] grid-rows-[1fr] gap-x-4 overflow-x-auto">
        {" "}
        {Trending.filter((item) => item.backdrop_path)
          .slice(0, 10)
          .map((item) => (
            <div key={item.id} className="w-[407px] relative ">
              {bookmarkedMovies.includes(item.id) ? (
                <BsBookmarkCheckFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747] z-50"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    removeMovieBookmark(item.id); // Remove bookmark
                  }}
                />
              ) : (
                <BsBookmarkPlusFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl z-50"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    addMovieBookmark(item.id); // Add bookmark
                  }}
                />
              )}
              <NavLink to={`/details/${type}/${item.id}`}    aria-label="details">
                <div className=" rounded-md imgShwd">
                  <LazyLoadImage
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </div>
              </NavLink>
              <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim absolute bottom-[50px] left-[10px]">
                <span>{new Date(item.release_date).getFullYear()}</span>

                <LuDot className="text-xl text-gray-300 " />
                <span className="flex items-center gap-x-1 ">
                  <MdLocalMovies /> Movie
                </span>
              </p>
              <h2 className="text-lg font-semibold  max-w-[100%] relative bottom-[30px] left-[10px]">
                {item.title}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
