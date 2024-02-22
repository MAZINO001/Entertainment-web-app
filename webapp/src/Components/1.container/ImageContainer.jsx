import { IoIosLink } from "react-icons/io";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { FaImdb } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
// import Loader from "../../Loaders/Loader";
export default function ImageContainer() {
  const location = useLocation();
  const passedData = location.state?.data;

  if (!passedData) {
    // return <Loader />;
    console.log("data is not passed ");
  }

  return (
    <div className="flex gap-x-8 ">
      <div className="w-[30%]">
        <img
          className="rounded-md cursor-pointer "
          src={`https://image.tmdb.org/t/p/original/${passedData.poster_path}`}
          alt="Poster"
        />
      </div>
      <div className="w-[60%]">
        {/* title */}
        <div className="mb-5 ">
          <h2 className="text-5xl mb-2">{passedData.title}</h2>
          <span className="text-md text-gray-400 ">{passedData.tagline} </span>
        </div>
        {/* rate */}
        <div className="mb-3">
          <h2 className="text-3xl inline-flex ">
            {(passedData.vote_average / 2).toFixed(1)}{" "}
          </h2>
        </div>
        {/* info */}
        <div className="flex justify-start gap-x-20  text-lg font-bold tracking-wide mb-4">
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
            <div key={item.id} className="inline-flex ">
              <p className="bg-white text-[#10141E] px-3 mr-4 py-2  rounded-md font-semibold">
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
        {/* buttons */}
        <div className="flex gap-4 tracking-wide">
          <div className="bg-[#5A6A90] text-[#fff] px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
            <a
              href={`https://www.imdb.com/title/${passedData.imdb_id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center"
            >
              Imdb <IoIosLink className="text-lg" />
            </a>
          </div>
          <div className="bg-[#5A6A90] text-[#fff] px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
            <a
              href={`https://www.youtube.com/watch?v=${passedData.videos.results[1].key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center"
            >
              Trailer <PiYoutubeLogoThin className="text-lg" />
            </a>
          </div>
          <div className="bg-[#5A6A90] text-[#fff] px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
            <a
              href={`${passedData.homepage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center"
            >
              Website <FaImdb className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
