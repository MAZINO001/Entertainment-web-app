/* eslint-disable no-unused-vars */
import { fetchTMDbData } from "../../api/fetchDataTv";
import { PiTelevisionFill } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import { LuDot } from "react-icons/lu";
import Loader from "../../Loaders/Loader";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Popular() {
  const [type, settype] = useState("TvShows");
  const [query, setquery] = useState("Popular");
  const { bookmarkedMovies, addBookmark, removeBookmark } = useBookmarks();

  const {
    data: Popular,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["PopularData"],
    queryFn: () => fetchTMDbData("popular"),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className=" flex flex-col  my-4 ">
      <div className="flex justify-between items-center relative ">
        <h2 className="title ">Popular</h2>
        <span className="typespan ml-[-15px]">TV SERIES</span>
        <NavLink
          to={`seeallcontainer/${type}/${query}`}
          state={{ data: Popular }}
          className="text-xl sm:text-lg text-[#FC4747] px-2 py-1 rounded-md"
        >
          see all
        </NavLink>
      </div>
      <div className="   grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4  md:pt-0 ">
        {Popular.filter((item) => item.backdrop_path)
          .slice(0, 8)
          .map((item) => (
            <div key={item.id} className="">
              <NavLink to={`/imagecontainer/${type}/${item.id}`}>
                <img
                  className="rounded-md cursor-pointer"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                />
              </NavLink>

              <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim ">
                <span>{new Date(item.first_air_date).getFullYear()}</span>

                <LuDot className="text-xl text-gray-300 " />
                <span className="flex items-center gap-x-1">
                  <PiTelevisionFill /> Tv Series
                </span>
              </p>
              <h2 className="text-lg font-semibold  max-w-[100%]">
                {item.name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
