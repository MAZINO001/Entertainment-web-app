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

  return (
    <div className="grid grid-cols-6 gap-4">
      {buttons.map((button) => (
        <div
          className="bg-blue-500 px-2 py-12 text-center rounded-md cursor-pointer text-xl font-semibold capitalize tracking-wider"
          key={button}
        >
          {button}
        </div>
      ))}
    </div>
  );
}
