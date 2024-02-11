/* eslint-disable no-unused-vars */
import { fetchTvShowsTypeData } from "../../api/fetchTypeData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResultsContainer from "../2.SideBar/ResultContainer";
import Loader from "../../Loaders/Loader";
export default function TvShows() {
  const [gnereId, setgnereId] = useState(18);
  const [Active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    setgnereId(genre.id);
    setActive(false);
    navigate("/resultscontainer");
  };

  useEffect(() => {
    fetchTvShowsTypeData(gnereId);
  }, [gnereId]);

  const {
    data: moviesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", gnereId],
    queryFn: () => fetchTvShowsTypeData(gnereId),
  });
  const genres = [
    {
      id: 10759,
      name: "Action & Adventure",
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
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  return (
    <>
      {Active ? (
        <div className="grid grid-cols-4">
          {genres.map((genre) => (
            <button
              key={genre.name}
              className="bg-blue-500 w-[154px] mx-4 my-4 h-[154px] flex items-center justify-center rounded-md cursor-pointer text-xl font-semibold capitalize tracking-wider"
              onClick={() => handleGenreClick(genre)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      ) : (
        <ResultsContainer data={moviesData} />
      )}
      {isLoading && <Loader />}
      {isError && <p>{error.message}</p>}
    </>
  );
}