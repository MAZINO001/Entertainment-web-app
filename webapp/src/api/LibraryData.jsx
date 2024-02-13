// export const fetchMoviesLibrary = async (bookmarkedMovies) => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
//     },
//   };

//   const Url = {
//     Bookmarked: `https://api.themoviedb.org/3/account/${bookmarkedMovies}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
//   };

//   try {
//     const response = await fetch(Url.Bookmarked, options);

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await response.json();
//     // return console.log(data.results);
//     return data.results;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to fetch data");
//   }
// };

export const fetchMoviesLibrary = async (bookmarkedMovies) => {
  const movieIdsArray = Array.from(bookmarkedMovies); // Assuming bookmarkedMovies is iterable
  console.log(typeof movieIdsArray);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
    },
  };

  const results = []; // Array to store fetched movie data

  for (const movieId of movieIdsArray) {
    const url = `https://api.themoviedb.org/3/account/${movieId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Failed to fetch data for movie ${movieId}`);
      }

      const data = await response.json();
      results.push(data);
    } catch (error) {
      console.error(`Error fetching data for movie ${movieId}:`, error);
    }
  }

  console.log(results);
  return results;
};
