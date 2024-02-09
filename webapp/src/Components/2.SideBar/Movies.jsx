// /* eslint-disable no-unused-vars */
// import { fetchMoviesTypeData } from "../../api/fetchTypeData";
// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ResultsContainer from "../2.SideBar/ResultContainer";
// import Loader from "../../Loaders/Loader";
// export default function Movies() {
//   const [gnereId, setgnereId] = useState(18);
//   const [Active, setActive] = useState(true);
//   const navigate = useNavigate();
//   console.log(gnereId);

//   const handleGenreClick = (genre) => {
//     setgnereId(genre.id);
//     setActive(false);
//     navigate("/resultscontainer");
//   };

//   useEffect(() => {
//     fetchMoviesTypeData(gnereId);
//   }, [gnereId]);

//   const {
//     data: moviesData,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["movies", gnereId],
//     queryFn: () => fetchMoviesTypeData(gnereId),
//   });

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
//     <>
//       {Active ? (
//         <div className="grid grid-cols-4">
//           {genres.map((genre) => (
//             <button
//               key={genre.name}
//               className="bg-blue-500 w-[154px] mx-4 my-4 h-[154px] flex items-center justify-center rounded-md cursor-pointer text-xl font-semibold capitalize tracking-wider"
//               onClick={() => handleGenreClick(genre)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>
//       ) : (
//         <ResultsContainer data={moviesData}  />
//       )}
//       {isLoading && <Loader />}
//       {isError && <p>{error.message}</p>}
//     </>
//   );
// }
/* eslint-disable no-unused-vars */
import { fetchMoviesTypeData } from "../../api/fetchTypeData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResultsContainer from "../2.SideBar/ResultContainer";
import Loader from "../../Loaders/Loader";
export default function Movies() {
  const [gnereId, setgnereId] = useState(18);
  const [Active, setActive] = useState(true);
  const navigate = useNavigate();
  console.log(gnereId);

  const handleGenreClick = (genre) => {
    setgnereId(genre.id);
    setActive(false);
    navigate("/resultscontainer");
  };

  useEffect(() => {
    fetchMoviesTypeData(gnereId);
  }, [gnereId]);

  const {
    data: moviesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", gnereId],
    queryFn: () => fetchMoviesTypeData(gnereId),
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
        <>{isLoading ? <Loader /> : <ResultsContainer data={moviesData} />}</>
      )}
    </>
  );
}
