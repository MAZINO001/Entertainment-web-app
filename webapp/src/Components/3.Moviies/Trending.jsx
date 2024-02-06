import { fetchTMDbDataMovies } from "../../api/FetchDataMovie";
import { MdLocalMovies } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loaders/Loader";
export default function UpComming() {
  const {
    data: UpComming,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["UpComming"],
    queryFn: () => fetchTMDbDataMovies("upComming"),
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
        <span className="typespan">Movies</span>
        <button className=" text-md text-[#fff] bg-[#FC4747] px-2 py-1  rounded-md ">
          see all
        </button>
      </div>
      <div className=" grid grid-cols-[repeat(10,_1fr)] grid-rows-[1fr] gap-x-4 overflow-x-auto">
        {" "}
        {Array.isArray(Trending) ? (
          Trending.filter((item) => item.backdrop_path)
            .slice(0, 10)
            .map((item) => (
              <div key={item.id} className="w-[407px] relative ">
                <div className="imgShwd rounded-md">
                  <img
                    className=" rounded-md cursor-pointer "
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </div>
                <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim absolute bottom-[50px] left-[10px]">
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
