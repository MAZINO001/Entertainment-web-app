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

// export const fetchMoviesLibrary = async (bookmarkedMovies) => {
//   if (!Array.isArray(bookmarkedMovies)) {
//     throw new Error("bookmarkedMovies must be an array");
//   }
//   const results = [];

//   for (let index = 0; index < bookmarkedMovies.length; index++) {
//     const url = `https://api.themoviedb.org/3/find/${bookmarkedMovies[index]}?language=en-US&page=1`;
//     // const url = `https://api.themoviedb.org/3/account/${bookmarkedMovies[index]}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;

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

//       if (data.results) {
//         results.push(...data.results);
//       } else {
//         console.warn(`No results found for movie ${bookmarkedMovies[index]}`);
//       }
//     } catch (error) {
//       console.error(
//         `Error fetching data for movie ${bookmarkedMovies[index]}:`,
//         error
//       );
//     }
//   }

//   console.log(results);
//   return results;
// };

export const fetchMoviesLibrary = async (bookmarkedMovies) => {
  if (!Array.isArray(bookmarkedMovies)) {
    throw new Error("bookmarkedMovies must be an array");
  }

  const results = [];

  for (let index = 0; index < bookmarkedMovies.length; index++) {
    // const url = `https://api.themoviedb.org/3/find/${bookmarkedMovies[index]}?external_source=imdb_id`;
    const url = `https://api.themoviedb.org/3/find/tt10676048?external_source=imdb_id`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok", // Replace with your actual token
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data for movie ${bookmarkedMovies[index]}: ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data.results) {
        results.push(...data.results);
      } else {
        console.warn(`No results found for movie ${bookmarkedMovies[index]}`);
      }
    } catch (error) {
      console.error(
        `Error fetching data for movie ${bookmarkedMovies[index]}: ${error.message}`
      );
    }
  }

  console.log("Fetched results:", results);
  return results;
};
