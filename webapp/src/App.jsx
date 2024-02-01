import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Wrapper from "./Components/wrapper";
import Movies from "./Components/2.SideBar/Movies";
import TvShows from "./Components/2.SideBar/TvShows";
import Library from "./Components/2.SideBar/Library";
import Home from "./Components/1.container/Home";
import SideBar from "./Components/2.SideBar/SideBar";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideBar />}>
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvseries" element={<TvShows />} />
        <Route path="library" element={<Library />} />
      </Route>
    )
  );
  return (
    <div className="text-white w-full h-full">
      <Wrapper />
      <RouterProvider router={router} />
    </div>
  );
}

