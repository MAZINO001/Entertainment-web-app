import { useEffect, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";
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
  return (
    <div className=" flex flex-col ">
      <h2 className="title">Trending</h2>
      <div className=" flex flex-row overflow-hidden gap-x-4">
        {" "}
        {Array.isArray(Trending) ? (
          Trending.filter((item) => item.backdrop_path)
            .slice(0, 10)
            .map((item) => (
              <div key={item.id} className="mb-3">
                <img
                  className=" rounded-md cursor-pointer "
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                />
                <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim ">
                  <span>{new Date(item.release_date).getFullYear()}</span>

                  <LuDot className="text-xl text-gray-300 " />
                  <span className="flex items-center gap-x-1">
                    <MdLocalMovies /> Movie
                  </span>
                </p>
                <h2 className="text-lg font-semibold  max-w-[100%]">
                  {item.title}
                </h2>
              </div>
            ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
    </div>
  );
}
