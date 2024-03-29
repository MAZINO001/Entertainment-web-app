/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultContainer from "./ResultContainer";

export default function Movies() {
  const [genreId, setgenreId] = useState("");
  const [pageNum, setpageNum] = useState(1);
  const [type, setType] = useState("Movies");
  const navigate = useNavigate();
  const handleGenreClick = (genreId) => {
    navigate(`/results/${type}/${genreId}/${pageNum}`);
  };

  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4 md:pt-0 mb-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="bg-blue-500 h-[150px] mx-10 sm:mx-0 rounded-md cursor-pointer text-3xl sm:text-2xl font-semibold capitalize tracking-wider"
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
