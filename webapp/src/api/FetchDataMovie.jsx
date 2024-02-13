export const fetchTMDbDataMovies = async (type) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
    },
  };

  const urlMap = {
    nowPlaying:
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    popular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    upComming:
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    topRated:
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=",
    trending: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  };

  if (!urlMap[type]) {
    throw new Error(`Invalid data type: ${type}`);
  }

  try {
    const response = await fetch(urlMap[type], options);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};
