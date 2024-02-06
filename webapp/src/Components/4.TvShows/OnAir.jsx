// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { PiTelevisionFill } from "react-icons/pi";
// import { LuDot } from "react-icons/lu";
// export default function OnAir() {
//   const [OnAir, setOnAir] = useState("");
//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
//       },
//     };

//     fetch(
//       "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setOnAir(response.results))
//       .catch((err) => console.error(err));
//   }, []);
//   return (
//     <div className=" flex flex-col my-4">
//       <div className="flex justify-between items-center relative">
//         <h2 className="title">On Air</h2>
//         <span className="typespan ml-[40px]">TV SERIES</span>
//         <button className=" text-md text-[#fff] bg-[#FC4747] px-2 py-1  rounded-md ">
//           see all
//         </button>
//       </div>
//       <div className="  grid grid-cols-4 grid-rows-2 gap-4  ">
//         {" "}
//         {Array.isArray(OnAir) ? (
//           OnAir.filter((item) => item.backdrop_path)
//             .slice(0, 8)
//             .map((item) => (
//               <div key={item.id} className="">
//                 <img
//                   className=" rounded-md cursor-pointer "
//                   src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//                   alt="Poster"
//                 />
//                 <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim ">
//                   <span>{new Date(item.first_air_date).getFullYear()}</span>

//                   <LuDot className="text-xl text-gray-300 " />
//                   <span className="flex items-center gap-x-1">
//                     <PiTelevisionFill /> Tv Series
//                   </span>
//                 </p>
//                 <h2 className="text-lg font-semibold  max-w-[100%]">
//                   {item.name}
//                 </h2>
//               </div>
//             ))
//         ) : (
//           <p>Data is not an array</p>
//         )}
//       </div>
//     </div>
//   );
// }
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

const fetchOnAir = () => {
  return fetch(
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1"
  );
};

import { PiTelevisionFill } from "react-icons/pi";
import { useQuery } from "react-query";
import { LuDot } from "react-icons/lu";
export default function OnAir() {
  const { data: OnAirData, isLoading } = useQuery({
    queryFn: () => fetchOnAir(),
    queryKey: ["onAirData"],
  });

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return (
    <div className="flex flex-col my-4">
      <div className="flex justify-between items-center relative">
        <h2 className="title">On Air</h2>
        <span className="typespan ml-[40px]">TV SERIES</span>
        <button className="text-md text-[#fff] bg-[#FC4747] px-2 py-1 rounded-md">
          see all
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {OnAirData?.filter((item) => item.backdrop_path)
          .slice(0, 8)
          .map((item) => (
            <div key={item.id} className="">
              <img
                className="rounded-md cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="Poster"
              />
              <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim">
                <span>{new Date(item.first_air_date).getFullYear()}</span>
                <LuDot className="text-xl text-gray-300" />
                <span className="flex items-center gap-x-1">
                  <PiTelevisionFill /> Tv Series
                </span>
              </p>
              <h2 className="text-lg font-semibold max-w-[100%]">
                {item.name}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
