/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
export default function SearchContainer({ query, onClose, setQuery, Data ,AllData}) {
  const handleContainerClose = () => {
    onClose();
    setQuery("");
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="title mt-2">Found {AllData.total_results} results for {`'${query}'`}</h2>
        <button onClick={handleContainerClose} className="text-lg">
          <FaXmark />
        </button>
      </div>
      <div className="grid grid-cols-4 justufy-center">
        {Array.isArray(Data) ? (
          Data.filter((item) => item.backdrop_path).map((item) => (
            <div key={item.id} className="mb-6">
              <img
                className="w-[13rem] h-auto rounded-lg cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path }`}
                alt="Poster"
              />
              <p>
                <span>{item.media_type} : </span>
                <span>
                  {item.media_type === "tv"
                    ? item.first_air_date
                    : item.release_date}
                </span>
              </p>
              <h3>{item.media_type === "tv" ? item.name : item.title}</h3>
            </div>
          ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
    </div>
  );
}
