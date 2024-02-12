/* eslint-disable no-unused-vars */
import { fetchMoviesTypeData } from "../../api/fetchTypeData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ResultContainer from "./ResultContainer";
export default function Movies() {
  const [gnereId, setgnereId] = useState(18);
  const [PageNum, setPageNum] = useState(1);
  const [Active, setActive] = useState(true);
  console.log(gnereId);

  const handleGenreClick = (genre) => {
    setgnereId(genre.id);
    setActive(false);
  };

  useEffect(() => {
    fetchMoviesTypeData(gnereId, PageNum);
  }, [gnereId, PageNum]);

  const handleNextPage = () => {
    setPageNum(PageNum + 1);
  };

  const handlePrevPage = () => {
    setPageNum(PageNum - 1);
  };

  const {
    data: moviesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", gnereId, PageNum],
    queryFn: () => fetchMoviesTypeData(gnereId, PageNum),
  });
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return (
    <>
      {Active ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4  md:pt-0">
          {genres.map((genre) => (
            <button
              key={genre.name}
              className="bg-blue-500 h-[150px] mx-10  sm:mx-0 rounded-md cursor-pointer text-3xl sm:text-2xl font-semibold capitalize tracking-wider"
              onClick={() => handleGenreClick(genre)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          {moviesData && (
            <ResultContainer
              Loading={isLoading}
              data={moviesData}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
          )}
        </div>
      )}
    </>
  );
}
