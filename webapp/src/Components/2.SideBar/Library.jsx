/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { LuDot } from "react-icons/lu";
// import { MdLocalMovies } from "react-icons/md";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { fetchMoviesLibrary } from "../../api/LibraryData";
// import { BsBookmarkXFill } from "react-icons/bs";
// import Loader from "../../Loaders/Loader";
// import { NavLink } from "react-router-dom";
// import { useBookmarks } from "../../CustomeHooks/useLocalStorage";
// import { useState } from "react";

// export default function Library() {
//   const { bookmarkedMovies, removeBookmark } = useBookmarks();
//   const [ActiveBm, setActiveBm] = useState(false);
//   const queryClient = useQueryClient();

//   const { data, isLoading, refetch } = useQuery({
//     queryKey: ["Bookmarked"],
//     queryFn: () => fetchMoviesLibrary(bookmarkedMovies),
//   });

//   const handleRemoveBookmark = async (id) => {
//     await removeBookmark(id);
//     // After removing bookmark, trigger a refetch to update the data
//     await refetch();
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   console.log(data);

//   return (
//     <div>
//       <div>
//         <h2 className="title mb-4">Bookmarks for Movies</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4  md:pt-0 ">
//           {data &&
//             data.map((item) => (
//               <div key={item.id} className="relative">
//                 <BsBookmarkXFill
//                   className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
//                   onClick={() => handleRemoveBookmark(item.id)}
//                 />

//                 {item.title ? (
//                   <NavLink to={`/imagecontainer/Movies/${item.id}`}>
//                     <img
//                       className="rounded-md cursor-pointer"
//                       src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//                       alt="Poster"
//                     />
//                   </NavLink>
//                 ) : (
//                   <NavLink to={`/imagecontainer/TvShows/${item.id}`}>
//                     <img
//                       className="rounded-md cursor-pointer"
//                       src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//                       alt="Poster"
//                     />
//                   </NavLink>
//                 )}

//                 <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim">
//                   <span>{new Date(item.release_date).getFullYear()}</span>
//                   <LuDot className="text-xl text-gray-300" />
//                   <span className="flex items-center gap-x-1">
//                     <MdLocalMovies /> Movie
//                   </span>
//                 </p>
//                 <h2 className="text-xl font-semibold max-w-[100%]">
//                   {item.title}
//                 </h2>
//               </div>
//             ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="title mb-4">Bookmarks for TvShows</h2>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { LuDot } from "react-icons/lu";
import { MdLocalMovies } from "react-icons/md";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMoviesLibrary, fetchTvShowsLibrary } from "../../api/LibraryData";
import { BsBookmarkXFill } from "react-icons/bs";
import Loader from "../../Loaders/Loader";
import { NavLink } from "react-router-dom";
import { useBookmarks } from "../../CustomeHooks/useLocalStorage";

export default function Library() {
  const {
    bookmarkedMovies,
    removeMovieBookmark,
    bookmarkedTvShows,
    removeTvShowBookmark,
  } = useBookmarks();
  const [activeBm, setActiveBm] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: movieData,
    isLoading: movieLoading,
    refetch: movieRefetch,
  } = useQuery({
    queryKey: ["BookmarkedMovies"],
    queryFn: () => fetchMoviesLibrary(bookmarkedMovies),
  });

  const {
    data: tvData,
    isLoading: tvLoading,
    refetch: tvRefetch,
  } = useQuery({
    queryKey: ["BookmarkedTvShows"],
    queryFn: () => fetchTvShowsLibrary(bookmarkedTvShows), 
  });

  const handleRemoveMovieBookmark = async (id) => {
    await removeMovieBookmark(id);
    await movieRefetch();
  };

  const handleRemoveTvShowBookmark = async (id) => {
    await removeTvShowBookmark(id);
    await tvRefetch();
  };

  if (movieLoading || tvLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="mb-5">
        <h2 className="title mb-4">Bookmarks for Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4 md:pt-0 ">
          {movieData &&
            movieData.map((item) => (
              <div key={item.id} className="relative">
                <BsBookmarkXFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
                  onClick={() => handleRemoveMovieBookmark(item.id)}
                />
                <NavLink to={`/imagecontainer/Movies/${item.id}`}>
                  <img
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </NavLink>
                <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim">
                  <span>{new Date(item.release_date).getFullYear()}</span>
                  <LuDot className="text-xl text-gray-300" />
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

      <div>
        <h2 className="title mb-4">Bookmarks for TvShows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 pt-4 md:pt-0 ">
          {tvData &&
            tvData.map((item) => (
              <div key={item.id} className="relative">
                <BsBookmarkXFill
                  className="absolute top-0 right-[-3px] cursor-pointer text-2xl text-[#FC4747]"
                  onClick={() => handleRemoveTvShowBookmark(item.id)}
                />
                <NavLink to={`/imagecontainer/TvShows/${item.id}`}>
                  <img
                    className="rounded-md cursor-pointer"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt="Poster"
                  />
                </NavLink>
                <p className="text-sm py-1 capitalize text-gray-300 flex items-center text-slim">
                  <span>{new Date(item.release_date).getFullYear()}</span>
                  <LuDot className="text-xl text-gray-300" />
                  <span className="flex items-center gap-x-1">
                    <MdLocalMovies /> TV Show
                  </span>
                </p>
                <h2 className="text-xl font-semibold max-w-[100%]">
                  {item.title}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
