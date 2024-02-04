import { useEffect, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";
export default function UpComming() {
  const [UpComming, setUpComming] = useState("");
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
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setUpComming(response.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className=" flex flex-col">
      <div className="flex justify-between items-center relative">
      <h2 className="title">UpComming</h2>
      <span className="typespan ml-[40px]">Movies</span>
        <button className=" text-md text-[#fff] bg-[#FC4747] px-2 py-1  rounded-md ">see all</button>
      </div>
      <div className="  grid grid-cols-4 grid-rows-2 gap-4  ">
        {" "}
        {Array.isArray(UpComming) ? (
          UpComming.filter((item) => item.backdrop_path)
            .slice(0, 6)
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
