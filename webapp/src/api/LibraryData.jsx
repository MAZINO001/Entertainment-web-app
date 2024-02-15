// export const fetchMoviesLibrary = async (bookmarkedMovies) => {
//   console.log(bookmarkedMovies);
//   if (!Array.isArray(bookmarkedMovies)) {
//     throw new Error("bookmarkedMovies must be an array");
//   }
//   const results = [];

//   for (let index = 0; index < bookmarkedMovies.length; index++) {
//     const url = `https://api.themoviedb.org/3/movie/${bookmarkedMovies[index]}`;

//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(
//           `Failed to fetch data for movie ${bookmarkedMovies[index]}: ${response.statusText}`
//         );
//       }
//       const data = await response.json();
//       results.push(data);
//       console.log(results);
//       return results;
//     } catch (error) {
//       console.error(
//         `Error fetching data for movie ${bookmarkedMovies[index]}:`,
//         error
//       );
//     }
//   }
// };

export const fetchMoviesLibrary = async (bookmarkedMovies) => {
  if (!Array.isArray(bookmarkedMovies)) {
    throw new Error("bookmarkedMovies must be an array");
  }
  const movieDataPromises = bookmarkedMovies.map(async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
        },
      });
      console.log(movieDataPromises);

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

  const results = [].concat(...filteredData);
  console.log(results);
  // return results;
};
