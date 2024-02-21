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

// import { useLocation } from "react-router-dom";

// export default function ImageContainer() {
//   const location = useLocation();
//   const passedData = location.state?.data;
//   console.log(passedData);

//   const dataArray =
//     passedData && typeof passedData === "object"
//       ? Object.values(passedData)
//       : [];
//   return (
//     <div>
//       {dataArray
//         .filter((item) => item.backdrop_path)
//         .map((item) => (
//           <div key={item.id}>
//             <img
//               className="rounded-md cursor-pointer w-[250px] h-[250px] "
//               src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
//               alt="Poster"
//             />
//             <h2>{item.title} hello</h2>
//             <span>{item.tagline} hello</span>
//             <h2>{item.vote_average} hello</h2>
//           </div>
//         ))}
//     </div>
//   );
// }
import { useLocation } from "react-router-dom";

export default function ImageContainer() {
  const location = useLocation();
  const passedData = location.state?.data;
  console.log(passedData);

  const dataArray = Object.keys(passedData);
  return (
    <div>
      {dataArray
        .filter((item) => item.backdrop_path)
        .map((item) => (
          <div key={item.id}>
            <img
              className="rounded-md cursor-pointer w-[250px] h-[250px] "
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt="Poster"
            />
            <h2>{item.title} hello</h2>
            <span>{item.tagline} hello</span>
            <h2>{item.vote_average} hello</h2>
          </div>
        ))}
    </div>
  );
}
