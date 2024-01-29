import NowPlaying from "../3.Moviies/NowPlaying";
import Popular from "../3.Moviies/Popular";
import TopRated from "../3.Moviies/TopRated";
import Trending from "../3.Moviies/Trending";
import UpComming from "../3.Moviies/UpComming";

export default function Home() {
  return <div className=" overflow-y-auto py-4">
    <Trending/>
    <Popular/>
    <NowPlaying/>
    <UpComming/>
    <TopRated/>
  </div>;
}
