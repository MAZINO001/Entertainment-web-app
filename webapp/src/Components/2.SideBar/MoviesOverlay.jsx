import { useQuery } from "@tanstack/react-query";
import { fetchMoviesTypeData } from "../../api/MoviesTypeData";
import Loader from "../../Loaders/Loader";
export default function MoviesOverlay() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: "movies",
    queryFn: () => fetchMoviesTypeData,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }
  console.log(movies);
  console.log(fetchMoviesTypeData);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.id}</h2>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}
