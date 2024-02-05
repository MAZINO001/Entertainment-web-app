// import { useEffect, useState } from "react";
// import OnAir from "../Components/4.TvShows/OnAir";

// export default function FetchData() {
//   const [onAirData, setOnAirData] = useState(null); // State for fetched data
//   const [isLoading, setIsLoading] = useState(false); // State for loading indicator
//   const [error, setError] = useState(null); // State for error handling
//   console.log(onAirData);
//   useEffect(() => {
//     setIsLoading(true); // Set loading state to true before fetching

//     const fetchData = async () => {
//       try {
//         const options = {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
//           },
//         };

//         const response = await fetch(
//           "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
//           options
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setOnAirData(data.results);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       {onAirData && onAirData.length > 0 ? (
//         <OnAir onAirData={onAirData} isLoading={isLoading} error={error} />
//       ) : (
//         <p>No data available.</p>
//       )}
//     </div>
//   );
// }
