import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loaders/Loader";
import {fetchMoviesTypeData} from "../../api/MoviesTypeData"
import { useState } from "react";
export default function Movies() {
  const {
    data: genresData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genresData"],
    queryFn: () => fetchMoviesTypeData(`${gnereId}`),
  });
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  const [gnereId, setgnereId] = useState(null)
  console.log(gnereId)

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
    },
  };

  fetch(``, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div>
      {genresData.data.map((genre) => (
        <button key={genre.id}>{genre.name}</button>
      ))}
    </div>
  );
}