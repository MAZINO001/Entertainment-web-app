// /* eslint-disable no-unused-vars */
// import NowPlayingMovies from "../3.Moviies-home/NowPlaying";
// import PopularMovies from "../3.Moviies-home/Popular";
// import TopRatedMovies from "../3.Moviies-home/TopRated";
// import TrendingMovies from "../3.Moviies-home/Trending";
// import UpCommingMovies from "../3.Moviies-home/UpComming";
// import NowPlayingTv from "../4.TvShows-home/AiringToday";
// import PopularTv from "../4.TvShows-home/Popular";
// import TopRatedTv from "../4.TvShows-home/TopRated";
// import TrendingTv from "../4.TvShows-home/Trending";
// import UpCommingTv from "../4.TvShows-home/OnAir";

// export default function Home() {

//   return (
//     <div className="mx-4 sm:mx-0">
//       {/* <TrendingMovies /> */}
//       <PopularMovies />
//       {/* <NowPlayingMovies /> */}
//       {/* <UpCommingMovies /> */}
//       {/* <TopRatedMovies /> */}
//       <hr className="my-4" />
//       {/* <TrendingTv /> */}
//       {/* <PopularTv /> */}
//       {/* <NowPlayingTv /> */}
//       {/* <UpCommingTv /> */}
//       {/* <TopRatedTv /> */}
//     </div>
//   );
// }
/* eslint-disable no-unused-vars */
import NowPlayingMovies from "../3.Moviies-home/NowPlaying";
import PopularMovies from "../3.Moviies-home/Popular";
import TopRatedMovies from "../3.Moviies-home/TopRated";
import TrendingMovies from "../3.Moviies-home/Trending";
import UpCommingMovies from "../3.Moviies-home/UpComming";
import NowPlayingTv from "../4.TvShows-home/AiringToday";
import PopularTv from "../4.TvShows-home/Popular";
import TopRatedTv from "../4.TvShows-home/TopRated";
import TrendingTv from "../4.TvShows-home/Trending";
import UpCommingTv from "../4.TvShows-home/OnAir";
import useLocalStorage from "../../CustomeHooks/useLocalStorage";

export default function Home() {
  const [bookmarkedMovies, setBookmarkedMovies] = useLocalStorage(
    "bookmarkedMovies",
    []
  );
  return (
    <div className="mx-4 sm:mx-0">
      {/* <TrendingMovies /> */}
      <PopularMovies
        bookmarkedMovies={bookmarkedMovies}
        setBookmarkedMovies={setBookmarkedMovies}
      />
      <NowPlayingMovies
        bookmarkedMovies={bookmarkedMovies}
        setBookmarkedMovies={setBookmarkedMovies}
      />
      {/* <UpCommingMovies /> */}
      {/* <TopRatedMovies /> */}
      <hr className="my-4" />
      {/* <TrendingTv /> */}
      {/* <PopularTv /> */}
      {/* <NowPlayingTv /> */}
      {/* <UpCommingTv /> */}
      {/* <TopRatedTv /> */}
    </div>
  );
}
