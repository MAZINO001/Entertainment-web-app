import { useLocation } from "react-router-dom";
export default function ImageContainer() {
  const location = useLocation();
  const passedData = location.state?.data;
  return (
    <div className="flex gap-x-4 ">
      <div className="w-[40%]">
        <img
          className="rounded-md cursor-pointer "
          src={`https://image.tmdb.org/t/p/original/${passedData.poster_path}`}
          alt="Poster"
        />
      </div>
      <div className="w-[60%]">
        {/* title */}
        <div className="mb-5 ">
          <h2 className="text-4xl ">{passedData.title}</h2>
          <span className="text-sm text-gray-400">{passedData.tagline} </span>
        </div>
        {/* rate */}
        <div className="mb-3">
          <h2 className="text-3xl">{passedData.vote_average} </h2>
        </div>
        {/* info */}
        <div className="flex justify-around  text-lg font-bold tracking-wide mb-4">
          <div className="flex flex-col text-center">
            <h2>Length</h2>
            <h2 className="text-gray-400">{passedData.runtime} mn</h2>
          </div>
          <div className="flex flex-col text-center">
            <h2>Language</h2>
            <h2 className="text-gray-400">
              {passedData.spoken_languages[0].english_name}
            </h2>
          </div>
          <div className="flex flex-col text-center">
            <h2>Year</h2>
            <h2 className="text-gray-400">
              {new Date(passedData.release_date).getFullYear()}
            </h2>
          </div>
          <div className="flex flex-col text-center">
            <h2>Status</h2>
            <h2 className="text-gray-400">{passedData.status}</h2>
          </div>
        </div>
        {/* genres */}
        <div className="mb-4">
          <h2 className="text-xl mb-2 ">Genres</h2>
          {passedData.genres.map((item) => (
            <div key={item.id} className="flex">
              <p className="bg-white text-[#10141E] px-2 py-1 rounded-md font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        {/* OverView */}
        <div className="">
          <h2 className="text-xl mb-2">OverView</h2>
          <p className="mb-4 text-md text-gray-400">{passedData.overview}</p>
        </div>
        <div className="flex gap-4 font-semibold">
          <div className="bg-white text-[#10141E] px-2 py-1 rounded-md ">
            <a
              href={`https://www.imdb.com/title/${passedData.imdb_id}/`}
              target="_blank"
              rel="noreferrer"
            >
              Imdb
            </a>
          </div>
          <div className="bg-white text-[#10141E] px-2 py-1 rounded-md ">
            <a
              href={`https://www.youtube.com/watch?v=${passedData.videos.results[1].key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trailer
            </a>
          </div>
          <div className="bg-white text-[#10141E] px-2 py-1 rounded-md ">
            <a
              href={`${passedData.homepage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
