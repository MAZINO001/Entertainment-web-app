export default function TvShows() {
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
    },
  };


  const genrId = 16
  fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genrId}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div className="grid grid-cols-6 gap-4">
      {buttons.map((button) => (
        <div
          className="bg-blue-500 w-[154px] h-[154px] flex items-center justify-center rounded-md cursor-pointer  text-xl font-semibold capitalize tracking-wider"
          key={button}
        >
          {button}
        </div>
      ))}
    </div>
  );
}
