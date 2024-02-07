// import { useQuery } from "@tanstack/react-query";
// import Loader from "../../Loaders/Loader";
// import { fetchMoviesTypeData } from "../../api/MoviesTypeData";
// import {  useState } from "react";
// import MoviesOverlay from "./MoviesOverlay";
// export default function TvShows() {
//   const [gnereId, setgnereId] = useState(18);

//   const {
//     data: genresData,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["genresData"],
//     queryFn: () => fetchMoviesTypeData(gnereId),
//   });

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <h2>{error.message}</h2>;
//   }
//   console.log(gnereId);
//   const genres = [
//     {
//       id: 28,
//       name: "Action",
//     },
//     {
//       id: 12,
//       name: "Adventure",
//     },
//     {
//       id: 16,
//       name: "Animation",
//     },
//     {
//       id: 35,
//       name: "Comedy",
//     },
//     {
//       id: 80,
//       name: "Crime",
//     },
//     {
//       id: 99,
//       name: "Documentary",
//     },
//     {
//       id: 18,
//       name: "Drama",
//     },
//     {
//       id: 10751,
//       name: "Family",
//     },
//     {
//       id: 14,
//       name: "Fantasy",
//     },
//     {
//       id: 36,
//       name: "History",
//     },
//     {
//       id: 27,
//       name: "Horror",
//     },
//     {
//       id: 10402,
//       name: "Music",
//     },
//     {
//       id: 9648,
//       name: "Mystery",
//     },
//     {
//       id: 10749,
//       name: "Romance",
//     },
//     {
//       id: 878,
//       name: "Science Fiction",
//     },
//     {
//       id: 10770,
//       name: "TV Movie",
//     },
//     {
//       id: 53,
//       name: "Thriller",
//     },
//     {
//       id: 10752,
//       name: "War",
//     },
//     {
//       id: 37,
//       name: "Western",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-6 gap-4">
//       {genres.map((genre) => (
//         <button
//           key={genre.id}
//           className="bg-blue-500 w-[154px] h-[154px] flex items-center justify-center rounded-md cursor-pointer text-xl font-semibold capitalize tracking-wider"
//           onClick={() => setgnereId(genre.id)}
//         >
//           {genre.name}
//         </button>
//       ))}
//       <MoviesOverlay data={genresData} />
//     </div>
//   );
// }

import { fetchMoviesTypeData } from "../../api/MoviesTypeData";
import { useEffect, useState } from "react";
export default function TvShows() {
  const [gnereId, setgnereId] = useState(18);

  useEffect(() => {
    fetchMoviesTypeData(gnereId);
  }, [gnereId]);

  console.log(gnereId);
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
    <div className="grid grid-cols-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="bg-blue-500 w-[154px] mx-4 my-4 h-[154px] flex items-center justify-center rounded-md cursor-pointer text-xl font-semibold capitalize tracking-wider"
          onClick={() => setgnereId(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>

  );
}
