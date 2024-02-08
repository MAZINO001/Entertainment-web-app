// import { useQuery } from "@tanstack/react-query";
// import { fetchMoviesTypeData } from "../../api/MoviesTypeData";
// import Loader from "../../Loaders/Loader";
// export default function MoviesOverlay() {
//   const {
//     data: movies,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: "movies",
//     queryFn: () => fetchMoviesTypeData,
//   });

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <p>Error fetching movies: {error.message}</p>;
//   }
//   console.log(movies);
//   console.log(fetchMoviesTypeData);
//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <img src={movie.poster_path} alt={movie.title} />
//           <p>{movie.release_date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useQuery } from "@tanstack/react-query";
// import { fetchMoviesTypeData } from "../../api/MoviesTypeData";
// import Loader from "../../Loaders/Loader";
// export default function MoviesOverlay() {
//   const {
//     data: movies,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: "movies",
//     queryFn: () => fetchMoviesTypeData,
//   });

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <p>Error fetching movies: {error.message}</p>;
//   }
//   console.log(movies);
//   console.log(fetchMoviesTypeData);
//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <img src={movie.poster_path} alt={movie.title} />
//           <p>{movie.release_date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useQuery } from "@tanstack/react-query";
import { fetchMoviesTypeData } from "../../api/MoviesTypeData";
import Loader from "../../Loaders/Loader";
export default function MoviesOverlay() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => fetchMoviesTypeData,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.poster_path} alt={movie.title} />
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}
