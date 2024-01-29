/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
export default function SearchContainer({ query, onClose, setQuery, Data }) {
  const handleContainerClose = () => {
    onClose();
    setQuery("");
  };
  console.log(Data);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="title mt-2">Found 999 results for {`'${query}'`}</h2>
        <button onClick={handleContainerClose} className="text-lg">
          <FaXmark />
        </button>
      </div>
      <div className="block ">
        {Array.isArray(Data) ? (
          Data.map((item) => (
            <div key={item.id} className="">
              {item.poster_path ? (
                <img
                  className="w-[250px] h-auto rounded-lg"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                />
              ) : (
                <p>No Poster Available</p>
              )}
              <p>
                <span>{item.media_type} : </span>
                <span>
                  {item.media_type === "tv"
                    ? item.first_air_date
                    : item.release_date}
                </span>
              </p>
              <h3>{item.title}</h3>
            </div>
          ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
    </div>
  );
}
