/* eslint-disable react/prop-types */
import { IoIosLink } from "react-icons/io";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { FaImdb } from "react-icons/fa6";
import Loader from "../../Loaders/Loader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchImageData } from "../../api/ImageData";
export default function ImageContainer() {
  const { id } = useParams();
  const { data: imageData, isLoading } = useQuery({
    queryKey: ["ImageId", id],
    queryFn: () => fetchImageData(id),
    enabled: !!id,
  });

  /**************************************** */
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  /**************************************** */

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" flex md:flex-row flex-col gap-x-8 m-4 sm:m-0 ">
      <div className=" w-[300px] mx-auto md:w-[40%] ">
        <img
          className="rounded-md cursor-pointer flex items-center justify-center mb-4 "
          src={`https://image.tmdb.org/t/p/original/${imageData.poster_path}`}
          alt="Poster"
        />
      </div>
      <div className="flex flex-col text-center md:text-left md:w-[60%]">
        {/* title */}
        <div className="mb-5">
          <h2 className="text-5xl mb-2">{imageData.title}</h2>
          <span className="text-md text-gray-400 ">{imageData.tagline} </span>
        </div>
        {/* rate */}
        <div className="mb-4 ">
          <h2 className="text-3xl inline-flex ">
            {(imageData.vote_average / 2).toFixed(1)} / 5
          </h2>
        </div>
        {/* info */}
        <div className="flex justify-evenly  text-lg font-semibold tracking-wide mb-4">
          <div className="flex flex-col text-center">
            <h2>Length</h2>
            <h2 className="text-gray-400">
              {toHoursAndMinutes(imageData.runtime)} h
            </h2>
          </div>
          <div className="flex flex-col text-center">
            <h2>Language</h2>
            <h2 className="text-gray-400">
              {imageData.spoken_languages[0].english_name}
            </h2>
          </div>
          <div className="flex flex-col text-center">
            <h2>Year</h2>
            <h2 className="text-gray-400">
              {new Date(imageData.release_date).getFullYear()}
            </h2>
          </div>
          <div className="flex flex-col text-center">
            <h2>Status</h2>
            <h2 className="text-gray-400">{imageData.status}</h2>
          </div>
        </div>
        {/* genres */}
        <div className="mb-4">
          <h2 className="text-xl mb-2 ">Genres</h2>
          {imageData.genres.map((item) => (
            <div key={item.id} className="inline-flex ">
              <p className="bg-white text-[#10141E] px-3 m-2 py-2  rounded-md font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        {/* OverView */}
        <div className="">
          <h2 className="text-xl mb-2">OverView</h2>
          <p className="mb-4 text-md  text-gray-400">{imageData.overview}</p>
        </div>
        {/* buttons */}
        <div className="flex justify-center gap-4 tracking-wide">
          <div className="bg-[#5A6A90] text-[#fff] px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
            <a
              href={`https://www.imdb.com/title/${imageData.imdb_id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center"
            >
              Imdb <IoIosLink className="text-lg" />
            </a>
          </div>
          {imageData.videos.results[1]?.key && (
            <div className="bg-[#5A6A90] text-[#fff] px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
              <a
                href={`https://www.youtube.com/watch?v=${imageData.videos.results[1].key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center"
              >
                Trailer <PiYoutubeLogoThin className="text-lg" />
              </a>
            </div>
          )}
          {imageData.homepage && (
            <div className="bg-[#5A6A90] text-[#fff] px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
              <a
                href={`${imageData.homepage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center"
              >
                Website <FaImdb className="text-lg" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// export default function ImageContainer() {
//   const { id } = useParams();
//   const { data: imageData } = useQuery({
//     queryKey: ["ImageId", id],
//     queryFn: () => fetchImageData(id),
//     enabled: !!id,
//   });

//   console.log(id);
//   console.log(imageData);
//   return (
//     <div>
//       <h2>ImageContainer</h2>
//       <p>ID: {id}</p>
//     </div>
//   );
// }
