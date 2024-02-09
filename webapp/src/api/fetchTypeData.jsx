/* eslint-disable no-unused-vars */
export const fetchMoviesTypeData = async (gnereId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
    },
  };

  const Url = {
    movie: `https://api.themoviedb.org/3/discover/movie?with_genres=${gnereId}`,
  };

  try {
    const response = await fetch(Url.movie, options);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // return console.log(data.results);
    return data.results ;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};


/* eslint-disable no-unused-vars */
export const fetchTvShowsTypeData = async (gnereId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
    },
  };

  const Url = {
    movie: `https://api.themoviedb.org/3/discover/tv?with_genres=${gnereId}`,
  };

  try {
    const response = await fetch(Url.movie, options);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // return console.log(data.results);
    return data.results ;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};
