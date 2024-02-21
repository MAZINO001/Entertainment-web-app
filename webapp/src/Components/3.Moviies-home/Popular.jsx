// import { NavLink } from "react-router-dom";
// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { fetchTMDbDataMovies } from "../../api/FetchDataMovie";
// import { MdLocalMovies } from "react-icons/md";
// import { BsBookmarkPlusFill } from "react-icons/bs";
// import { BsBookmarkCheckFill } from "react-icons/bs";
// import { LuDot } from "react-icons/lu";
// import { useQuery } from "@tanstack/react-query";
// import Loader from "../../Loaders/Loader";
// import useLocalStorage from "../../CustomeHooks/useLocalStorage";

// export default function Popular() {
//   const [bookmarkedMovies, setBookmarkedMovies] = useLocalStorage(
//     "bookmarkedMovies",
//     []
//   );

//   const [ActiveBm, setActiveBm] = useState(false);
//   const {
//     data: Popular,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["Popular"],
//     queryFn: () => fetchTMDbDataMovies("popular"),
//   });

//   if (isLoading) {
//     return <Loader />;
//   }
//   if (error) {
//     return <h2>{error.message}</h2>;
//   }

//   return (
//     <div className=" flex flex-col my-4">
//       <div className="flex justify-between items-center relative ">
//         <h2 className="title">Popular</h2>
//         <span className="typespan ml-[-15px]">Movies</span>
//         <NavLink
//           to="seeallcontainer"
//           state={{ data: Popular }}
//           className="text-xl sm:text-lg text-[#FC4747] px-2 py-1 rounded-md"
//         >
//           see all
//         </NavLink>
//       </div>
//       <div className="  grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4  md:pt-0 ">
//         {Popular.filter((item) => item.backdrop_path)
//           .slice(0, 8)
//           .map((item) => (
//             <div key={item.id} className="relative">
//               {bookmarkedMovies.includes(item.id) ? (
//                 <BsBookmarkCheckFill
//                   className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
//                   onClick={() => {
//                     setActiveBm((state) => !state);
//                     const movieId = item.id;
//                     setBookmarkedMovies(
//                       bookmarkedMovies.filter((id) => id !== movieId)
//                     );
//                   }}
//                 />
//               ) : (
//                 <BsBookmarkPlusFill
//                   className="absolute top-0 right-[-3px] cursor-pointer text-2xl "
//                   onClick={() => {
//                     setActiveBm((state) => !state);
//                     const movieId = item.id;
//                     setBookmarkedMovies([...bookmarkedMovies, movieId]);
//                   }}
//                 />
//               )}

//               <img
//                 className=" rounded-md cursor-pointer   "
//                 src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//                 alt="Poster"
//               />
//               <p className=" text-md py-1 capitalize text-gray-300 flex items-center text-slim ">
//                 <span>{new Date(item.release_date).getFullYear()}</span>

//                 <LuDot className="text-xl text-gray-300 " />
//                 <span className="flex items-center gap-x-1">
//                   <MdLocalMovies /> Movie
//                 </span>
//               </p>
//               <h2 className="text-xl font-semibold max-w-[100%]">
//                 {item.title}
//               </h2>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
import { NavLink } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { fetchTMDbDataMovies } from "../../api/FetchDataMovie";
import { MdLocalMovies } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loaders/Loader";
import useLocalStorage from "../../CustomeHooks/useLocalStorage";
import { fetchImageData } from "../../api/ImageData";

export default function Popular() {
  const [bookmarkedMovies, setBookmarkedMovies] = useLocalStorage(
    "bookmarkedMovies",
    []
  );
  const [ActiveBm, setActiveBm] = useState(false);
  const [Id, setId] = useState();

  const { data: imagData } = useQuery({
    queryKey: ["ImageId"],
    queryFn: () => fetchImageData(Id),
  });
  const {
    data: Popular,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Popular"],
    queryFn: () => fetchTMDbDataMovies("popular"),
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className=" flex flex-col my-4">
      <div className="flex justify-between items-center relative ">
        <h2 className="title">Popular</h2>
        <span className="typespan ml-[-15px]">Movies</span>
        <NavLink
          to="seeallcontainer"
          state={{ data: Popular }}
          className="text-xl sm:text-lg text-[#FC4747] px-2 py-1 rounded-md"
        >
          see all
        </NavLink>
      </div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4  md:pt-0 ">
        {Popular.filter((item) => item.backdrop_path)
          .slice(0, 8)
          .map((item) => (
            <div key={item.id} className="relative">
              {bookmarkedMovies.includes(item.id) ? (
                <BsBookmarkCheckFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
                  onClick={() => {
                    setActiveBm((state) => !state);
                    const movieId = item.id;
                    setBookmarkedMovies(
                      bookmarkedMovies.filter((id) => id !== movieId)
                    );
                  }}
                />
              ) : (
                <BsBookmarkPlusFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl "
                  onClick={() => {
                    setActiveBm((state) => !state);
                    const movieId = item.id;
                    setBookmarkedMovies([...bookmarkedMovies, movieId]);
                  }}
                />
              )}

              <NavLink
                to={`/imagecontainer`}
                state={{ data: imagData }}
                className="rounded-md cursor-pointer"
              >
                <img
                  className=" rounded-md cursor-pointer   "
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="Poster"
                  onClick={() => {
                    console.log(`Fetching movie details for ID: ${item.id}`);
                    setId(item.id);
                  }}
                />
              </NavLink>
              <p className=" text-md py-1 capitalize text-gray-300 flex items-center text-slim ">
                <span>{new Date(item.release_date).getFullYear()}</span>

                <LuDot className="text-xl text-gray-300 " />
                <span className="flex items-center gap-x-1">
                  <MdLocalMovies /> Movie
                </span>
              </p>
              <h2 className="text-xl font-semibold max-w-[100%]">
                {item.title}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
