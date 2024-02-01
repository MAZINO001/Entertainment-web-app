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
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setTrending(response.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" flex flex-col ">
      <div className="flex justify-between items-center">
        <h2 className="title">Trending</h2>
        <button className=" text-md text-[#fff] bg-[#FC4747] px-2 py-1  rounded-md ">see all</button>
      </div>
      {/* <div className=" flex flex-row overflow-hidden gap-x-4 "> */}
      <div className=" grid grid-cols-[repeat(10,_1fr)] grid-rows-[1fr] gap-x-4 overflow-x-auto">
        {" "}
        {Array.isArray(Trending) ? (
          Trending.filter((item) => item.backdrop_path)
            .slice(0, 10)
            .map((item) => (
              <div key={item.id} className="mb-3 w-[407px] relative">
                <img
                  className=" rounded-md cursor-pointer"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                />
                <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim absolute bottom-[50px] left-[10px] ">
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
            ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
    </div>
  );
}
