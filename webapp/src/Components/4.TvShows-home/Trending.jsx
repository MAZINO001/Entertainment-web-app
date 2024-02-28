/* eslint-disable no-unused-vars */
import { fetchTMDbData } from "../../api/fetchDataTv";

import { PiTelevisionFill } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import { LuDot } from "react-icons/lu";
import Loader from "../../Loaders/Loader";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
export default function Trending() {
  const [type, settype] = useState("TvShows");
  const [query, setquery] = useState("Trending");
  const { bookmarkedMovies, addBookmark, removeBookmark } = useBookmarks();
  const [ActiveBm, setActiveBm] = useState(false);

  const {
    data: Trending,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["TrendingData"],
    queryFn: () => fetchTMDbData("trending"),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className=" flex flex-col ">
      <div className="flex justify-between items-center relative">
        <h2 className="title">Trending</h2>
        <span className="typespan">TV SERIES</span>
        <NavLink
          to={`seeallcontainer/${type}/${query}`}
          state={{ data: Trending }}
          className="text-xl sm:text-lg text-[#FC4747] px-2 py-1 rounded-md"
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
                    removeBookmark(item.id); // Remove bookmark
                  }}
                />
              ) : (
                <BsBookmarkPlusFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl z-50"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    addBookmark(item.id); // Add bookmark
                  }}
                />
              )}
              <NavLink to={`/imagecontainer/${type}/${item.id}`}>
                <div className=" rounded-md imgShwd">
                  <img
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </div>
              </NavLink>

              <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim absolute bottom-[50px] left-[10px]">
                <span>{new Date(item.first_air_date).getFullYear()}</span>

                <LuDot className="text-xl text-gray-300 " />
                <span className="flex items-center gap-x-1 ">
                  <PiTelevisionFill /> Tv Series
                </span>
              </p>
              <h2 className="text-lg font-semibold  max-w-[100%] relative bottom-[30px] left-[10px]">
                {item.name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
