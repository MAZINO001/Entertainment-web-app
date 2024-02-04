// import NowPlayingMovies from "../3.Moviies/NowPlaying";
// import PopularMovies from "../3.Moviies/Popular";
// import TopRatedMovies from "../3.Moviies/TopRated";
// import TrendingMovies from "../3.Moviies/Trending";
// import UpCommingMovies from "../3.Moviies/UpComming";
import NowPlayingTv from "../4.TvShows/AiringToday";
import PopularTv from "../4.TvShows/Popular";
import TopRatedTv from "../4.TvShows/TopRated";
import TrendingTv from "../4.TvShows/Trending";
import UpCommingTv from "../4.TvShows/OnAir";

export default function Home() {
  return (
    <div className="">
      {/* <TrendingMovies />
      <PopularMovies />
      <NowPlayingMovies />
      <UpCommingMovies />
      <TopRatedMovies /> */}

      <TrendingTv />
      <PopularTv />
      <NowPlayingTv />
      <UpCommingTv />
      <TopRatedTv />
    </div>
  );
}
