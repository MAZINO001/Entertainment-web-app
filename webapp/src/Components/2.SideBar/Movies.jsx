// import { useQuery } from "@tanstack/react-query";
// import Loader from "../../Loaders/Loader";

// export default function Movies() {
//   const {
//     data: genresData,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["genresData"],
//     queryFn: () => fetchMoviesTypeData(),
//   });
//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <h2>{error.message}</h2>;
//   }
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
//     },
//   };

//   fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

//   return (
//     <div>
//       {genresData.data.map((genre) => (
//         <button key={genre.id}>{genre.name}</button>
//       ))}
//     </div>
//   );
// }

export default function Movies() {
  const buttons = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
  ];

  return (
    <div className="grid grid-cols-6 gap-4">
      {buttons.map((button) => (
        <div
          className="bg-red-500 w-[154px] h-[154px] flex items-center justify-center rounded-md cursor-pointer  text-xl font-semibold capitalize tracking-wider"
          key={button}
        >
          {button}
        </div>
      ))}
    </div>
  );
}
