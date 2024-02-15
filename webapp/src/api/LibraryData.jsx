export const fetchMoviesLibrary = async (bookmarkedMovies) => {
  console.log(bookmarkedMovies);
  if (!Array.isArray(bookmarkedMovies)) {
    throw new Error("bookmarkedMovies must be an array");
  }
  const movieDataPromises = bookmarkedMovies.map(async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    console.log(movieId);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data for movie ${movieId}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching data for movie ${movieId}:`, error);
      return null;
    }
  });
  const movieData = await Promise.all(movieDataPromises);
  const filteredData = movieData.filter((data) => data !== null);
  console.log(movieData);
  console.log(filteredData);
  const results = [].concat(...filteredData);
  return results;
};
