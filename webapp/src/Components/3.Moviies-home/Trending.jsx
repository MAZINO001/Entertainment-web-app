/* eslint-disable no-unused-vars */
import { fetchTMDbDataMovies } from "../../api/FetchDataMovie";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loaders/Loader";
import { BsBookmarkCheckFill, BsBookmarkPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import useLocalStorage from "../../CustomeHooks/useLocalStorage";
import { NavLink } from "react-router-dom";
export default function Trending() {
  const [bookmarkedMovies, setBookmarkedMovies] = useLocalStorage(
    "bookmarkedMovies",
    []
  );
  const [ActiveBm, setActiveBm] = useState(false);
  const [type, settype] = useState("Movies");

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
          to="seeallcontainer"
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
              {/* <div className="imgShwd rounded-md bg-green-500"> */}
              <NavLink to={`/imagecontainer/${type}/${item.id}`}>
              <div className=" rounded-md imgShwd">
                {bookmarkedMovies.includes(item.id) ? (
                  <BsBookmarkCheckFill
                    className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747] z-50"
                    onClick={() => {
                      setActiveBm((state) => !state);
                      const movieId = item.id;
                      setBookmarkedMovies(
                        bookmarkedMovies.filter((id) => id !== movieId)
                      );
                    }}
                  />
                ) : (
                  <BsBookmarkPlusFill
                    className="absolute top-0 right-[-3px] cursor-pointer text-2xl z-50"
                    onClick={() => {
                      setActiveBm((state) => !state);
                      const movieId = item.id;
                      setBookmarkedMovies([...bookmarkedMovies, movieId]);
                    }}
                  />
                )}
                  <img
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                
              </div>
              </NavLink>
              <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim absolute bottom-[80px] left-[10px]">
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
