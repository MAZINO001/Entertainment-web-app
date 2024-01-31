import { useEffect, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
export default function Trending() {
  const [Trending, setTrending] = useState("");
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
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setTrending(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(Trending);
  return (
    <div>
      <h2 className="title">Trending</h2>
      <div className="bg-red-400 h-[100px]"> {Array.isArray(Data) ? (
          Data.filter((item) => item.backdrop_path).map((item) => (
            <div key={item.id} className="mb-3 ">
              <img
                className="w-full h-auto rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="Poster"
              />
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
          <p>Data is not an array</p>
        )}</div>
    </div>
  );
}
