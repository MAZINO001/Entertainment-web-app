/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Movies() {
  const [genreId, setgenreId] = useState("");
  const [pageNum, setpageNum] = useState(1);
  const [type, setType] = useState("TvShow");

  const navigate = useNavigate();
  const handleGenreClick = (genreId) => {
    navigate(`/results/${type}/${genreId}/${pageNum}`);
  };

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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4 md:pt-0 mb-4">
      {genres.map((genre) => (
        <button
          key={genre.name}
          className="bg-blue-500 h-[150px] mx-10 sm:mx-0 rounded-md cursor-pointer text-3xl sm:text-2xl font-semibold capitalize tracking-wider"
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
