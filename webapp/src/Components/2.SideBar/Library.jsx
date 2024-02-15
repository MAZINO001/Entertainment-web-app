/* eslint-disable react/prop-types */
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesLibrary } from "../../api/LibraryData";

export default function Library() {
  const bookmarkedMovies = JSON.stringify(
    localStorage.getItem("bookmarkedMovies")
  );
  const { data } = useQuery({
    queryKey: ["Bookmarked"],
    queryFn: () => fetchMoviesLibrary(bookmarkedMovies),
  });
  return (
    <div>
      <div className="title">
        <h2>Bookmarks for Movies</h2>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <img
                className="rounded-md cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="Poster"
              />
              <p className="text-md py-1 capitalize text-gray-300 flex items-center text-slim">
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
      <div className="title">
        <h2>Bookmarks for TvShows</h2>
      </div>
    </div>
  );
}
