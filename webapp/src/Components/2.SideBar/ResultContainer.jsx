// /* eslint-disable react/prop-types */
// export default function ResultContainer({
//   Loading,
//   data,
//   handlePrevPage,
//   handleNextPage,
// }) {
//   return (
//     <div className="grid grid-cols-4 gap-4 relative  pb-10">
//       {Loading ? (
//         <p>Loading...</p>
//       ) : data?.length > 0 ? (
//         data.map((item) => (
//           <div key={item.id} className="">
//             <img
//               className=" rounded-md cursor-pointer "
//               src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//               alt="Poster"
//             />
//           </div>
//         ))
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

import Loader from "../../Loaders/Loader";
/* eslint-disable react/prop-types */
export default function ResultContainer({
  Loading,
  data,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative pb-10">
      {Loading ? (
        <Loader />
      ) : data?.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="">
            <img
              className=" rounded-md cursor-pointer "
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="Poster"
            />
          </div>
        ))
      ) : (
        <p>No data found.</p>
      )}
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
