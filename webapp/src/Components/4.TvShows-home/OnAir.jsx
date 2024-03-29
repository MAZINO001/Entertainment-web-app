/* eslint-disable no-unused-vars */
import { fetchTMDbData } from "../../api/fetchDataTv";
import { PiTelevisionFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loaders/Loader";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function OnAir() {
  const [type, settype] = useState("TvShows");
  const [query, setquery] = useState("On Air");
  const { bookmarkedTvShows, addTvShowBookmark, removeTvShowBookmark } =
    useBookmarks();
  const [ActiveBm, setActiveBm] = useState(false);

  const {
    data: OnAirData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["OnAirData"],
    queryFn: () => fetchTMDbData("onTheAir"),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="flex flex-col my-4">
      <div className="flex justify-between items-center relative">
        <h2 className="title">On Air</h2>
        <span className="typespan ml-[-27px]">TV SERIES</span>
        <NavLink
          to={`all/${type}/${query}`}
          state={{ data: OnAirData }}
          aria-label="all"
          className="text-md tracking-wider  sm:text-lg uppercase text-[#FC4747]  rounded-md"

        >
          see all
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4 md:pt-0">
        {OnAirData?.filter((item) => item.backdrop_path)
          .slice(0, 8)
          .map((item) => (
            <div key={item.id} className="relative">
              {bookmarkedTvShows.includes(item.id) ? (
                <BsBookmarkCheckFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    removeTvShowBookmark(item.id); // Remove bookmark
                  }}
                />
              ) : (
                <BsBookmarkPlusFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl "
                  onClick={() => {
                    setActiveBm((state) => !state);
                    addTvShowBookmark(item.id); // Add bookmark
                  }}
                />
              )}
              <NavLink to={`/details/${type}/${item.id}`}    aria-label="details"> 
                <LazyLoadImage
                  className="rounded-md cursor-pointer"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                />
              </NavLink>
              <p className="text-md py-1 capitalize text-gray-300 flex items-center text-slim">
                <span>{new Date(item.first_air_date).getFullYear()}</span>
                <LuDot className="text-xl text-gray-300" />
                <span className="flex items-center gap-x-1">
                  <PiTelevisionFill /> Tv Series
                </span>
              </p>
              <h2 className="text-xl font-semibold max-w-[100%]">
                {item.name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
