/* eslint-disable react/prop-types */
export default function MoviesOverlat({ data }) {
  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <div key={item.id}>
          <img
            className=" rounded-md cursor-pointer "
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt="Poster"
          />
        </div>
      ))}
    </div>
  );
}

