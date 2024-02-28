/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesLibrary } from "../../api/LibraryData";
import { BsBookmarkXFill } from "react-icons/bs";
import Loader from "../../Loaders/Loader";
import { NavLink } from "react-router-dom";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
import { useState } from "react";
export default function Library() {
  const { bookmarkedMovies, removeBookmark } = useBookmarks();
  const [ActiveBm, setActiveBm] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["Bookmarked"],
    queryFn: () => fetchMoviesLibrary(bookmarkedMovies),
  });
  if (isLoading) {
    <Loader />;
  }
  console.log(data);
  return (
    <div>
      <div className="title">
        <h2>Bookmarks for Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4  md:pt-0 ">
          {data &&
            data.map((item) => (
              <div key={item.id} className="relative">
                <BsBookmarkXFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    removeBookmark(item.id); // Remove bookmark
                  }}
                />

                {item.title ? (
                  <NavLink to={`/imagecontainer/Movies/${item.id}`}>
                    <img
                      className="rounded-md cursor-pointer"
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt="Poster"
                    />
                  </NavLink>
                ) : (
                  <NavLink to={`/imagecontainer/TvShows/${item.id}`}>
                    <img
                      className="rounded-md cursor-pointer"
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt="Poster"
                    />
                  </NavLink>
                )}

                <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim">
                  <span>{new Date(item.release_date).getFullYear()}</span>
                  <LuDot className="text-xl text-gray-300" />
                  <span className="flex items-center gap-x-1">
                    <MdLocalMovies /> Movie
                  </span>
                </p>
                <h2 className="text-xl font-semibold max-w-[100%]">
                  {item.title}
                </h2>
              </div>
            ))}
        </div>
      </div>

      <div className="title">
        <h2>Bookmarks for TvShows</h2>
      </div>
    </div>
  );
}
