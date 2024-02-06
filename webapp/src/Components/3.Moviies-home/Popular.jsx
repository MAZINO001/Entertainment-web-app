  import { fetchTMDbDataMovies } from "../../api/FetchDataMovie";
  import { MdLocalMovies } from "react-icons/md";
  import { LuDot } from "react-icons/lu";
  import { useQuery } from "@tanstack/react-query";
  import Loader from "../../Loaders/Loader";
  export default function Popular() {

    const {
      data: Popular,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["Popular"],
      queryFn: () => fetchTMDbDataMovies("popular"),
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
        <span className="typespan ml-[-15px]">Movies</span>
        <button className=" text-md text-[#fff] bg-[#FC4747] px-2 py-1  rounded-md ">
          see all
        </button>
      </div>
      <div className="  grid grid-cols-4 grid-rows-2 gap-4  ">
        {
          Popular.filter((item) => item.backdrop_path)
            .slice(0, 8)
            .map((item) => (
              <div key={item.id} className="">
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
        }
      </div>
    </div>
  );
}
