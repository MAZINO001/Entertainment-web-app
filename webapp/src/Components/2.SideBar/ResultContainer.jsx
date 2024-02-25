// /* eslint-disable react/prop-types */
// import { MdLocalMovies } from "react-icons/md";
// import Loader from "../../Loaders/Loader";
// import { LuDot } from "react-icons/lu";
// import { PiTelevisionFill } from "react-icons/pi";
// export default function ResultContainer({
//   Loading,
//   data,
//   handlePrevPage,
//   handleNextPage,
// }) {
//   return (
//     <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative pb-10 mx-4 sm:mx-0">
//       {Loading ? (
//         <Loader />
//       ) : data?.length > 0 ? (
//         data
//           .filter((item) => !!item.backdrop_path)
//           .map((item) => (
//             <div key={item.id} className="">
//               <img
//                 className=" rounded-md cursor-pointer "
//                 src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//                 alt="Poster"
//               />
//               <p className=" text-md md:text-sm py-1 capitalize text-gray-300 flex items-center text-slim ">
//                 <span>
//                   {new Date(
//                     item.release_date || item.first_air_date
//                   ).getFullYear()}
//                 </span>

//                 <LuDot className="text-xl text-gray-300 " />
//                 <span className="flex items-center gap-x-1">
//                   {item.title ? (
//                     <>
//                       <MdLocalMovies /> Movie
//                     </>
//                   ) : (
//                     <>
//                       <PiTelevisionFill /> Tv Series
//                     </>
//                   )}
//                 </span>
//               </p>
//               <h2 className="text-lg md:text-xl font-semibold max-w-[100%]">
//                 {item.title || item.name}
//               </h2>
//             </div>
//           ))
//       ) : (
//         <p>No data found.</p>
//       )}
//       <div className="flex justify-center items-center gap-4 centered-div">
//         <button onClick={handlePrevPage} className="bg-red-500 px-4 capitalize">
//           next
//         </button>
//         <button
//           onClick={handleNextPage}
//           className="bg-blue-500 px-4 capitalize"
//         >
//           Page
//         </button>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
import { MdLocalMovies } from "react-icons/md";
import Loader from "../../Loaders/Loader";
import { LuDot } from "react-icons/lu";
import { PiTelevisionFill } from "react-icons/pi";

export default function ResultContainer() {

  const { data: moviesData, isLoading } = useQuery({
    queryKey: ["movies", gnereId, PageNum],
    queryFn: () => fetchMoviesTypeData(gnereId, PageNum),
  });

  const handleNextPage = () => {
    setPageNum(PageNum + 1);
  };

  const handlePrevPage = () => {
    setPageNum(PageNum - 1);
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative pb-10 mx-4 sm:mx-0">
      {moviesData
        .filter((item) => !!item.backdrop_path)
        .map((item) => (
          <div key={item.id} className="">
            <img
              className=" rounded-md cursor-pointer "
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="Poster"
            />
            <p className=" text-md md:text-sm py-1 capitalize text-gray-300 flex items-center text-slim ">
              <span>
                {new Date(
                  item.release_date || item.first_air_date
                ).getFullYear()}
              </span>

              <LuDot className="text-xl text-gray-300 " />
              <span className="flex items-center gap-x-1">
                {item.title ? (
                  <>
                    <MdLocalMovies /> Movie
                  </>
                ) : (
                  <>
                    <PiTelevisionFill /> Tv Series
                  </>
                )}
              </span>
            </p>
            <h2 className="text-lg md:text-xl font-semibold max-w-[100%]">
              {item.title || item.name}
            </h2>
          </div>
        ))}
      <div className="flex justify-center items-center gap-4 centered-div">
        <button onClick={handlePrevPage} className="bg-red-500 px-4 capitalize">
          next
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 px-4 capitalize"
        >
          Page
        </button>
      </div>
    </div>
  );
}
