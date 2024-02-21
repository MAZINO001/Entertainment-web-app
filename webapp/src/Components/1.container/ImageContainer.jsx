// import { useLocation } from "react-router-dom";

// export default function ImageContainer() {
//   const location = useLocation();
//   const passedData = location.state?.data;
//     console.log(passedData);
//   return (
//     <div>
//       {passedData
//         .filter((item) => item.backdrop_path)
//         .map((item) => {
//           <div key={item.id}>
//             <div>
//               <img
//                 className=" rounded-md cursor-pointer   "
//                 src={`https://image.tmdb.org/t/p/original/${item.poster_pat}`}
//                 alt="Poster"
//               />
//             </div>
//             <div>
//               <h2>{item.title}</h2>
//               <span>{item.tagline}</span>
//               <h2>{item.vote_average}</h2>
//             </div>
//           </div>;
//         })}
//     </div>
//   );
// }

import { useLocation } from "react-router-dom";

export default function ImageContainer() {
  const location = useLocation();
  const passedData = location.state?.data;
  console.log(passedData);

  return (
    <div className="flex gap-x-4">
      <div>
        <img
          className="rounded-md cursor-pointer w-[300px]  "
          src={`https://image.tmdb.org/t/p/original/${passedData.poster_path}`}
          alt="Poster"
        />
      </div>
      <div>
        <h2 className="text-4xl ">{passedData.title}</h2>
        <span className="text-sm text-gray-100">{passedData.tagline} </span>
        <h2 className="text-2xl">{passedData.vote_average} </h2>
        <div className="flex justify-between gap-8 text-lg">
          <div className="flex flex-col text-center ">
            <h2>Length</h2>
            <h2>{passedData.runtime}</h2>
          </div>
          <div className="flex flex-col text-center ">
            <h2>Language</h2>
            <h2>{passedData.spoken_languages[0].english_name}</h2>
          </div>
          <div className="flex flex-col text-center ">
            <h2>Year</h2>
            <h2>{passedData.release_date}</h2>
          </div>
          <div className="flex flex-col text-center ">
            <h2>Status</h2>
            <h2>{passedData.status}</h2>
          </div>
        </div>
        <div>
          <h2>Genres</h2>
          {passedData.genres.map((item) => {
            <div key={item.id}>
              <p className="bg-red-500 ">{item.name}</p>
            </div>;
          })}
        </div>
        <div className="">
          <h2>OverView</h2>
          <p>{passedData.overview}</p>
        </div>
      </div>
    </div>
  );
}
