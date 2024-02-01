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
import Sidebar from "./Components/2.SideBar/SideBar";
import { useLocation } from "react-router-dom";
import NotFound from "./Components/1.container/NotFound";
import SideBar from "./Components/2.SideBar/SideBar";
import Container from "./Components/1.container/Container";
export default function App() {
  const Location = useLocation();
  const content =
    Location.pathname === "/" ? (
      <Home />
    ) : Location.pathname === "movies" ? (
      <Movies />
    ) : Location.pathname === "movies" ? (
      <TvShows />
    ) : Location.pathname === "movies" ? (
      <Library />
    ) : (
      <NotFound />
    );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvseries" element={<TvShows />} />
        <Route path="library" element={<Library />} />
      </Route>
    )
  );
  return (
    <div className="text-white w-full h-full">
      <Wrapper>
        <SideBar />
        <Container content={content} />
      </Wrapper>
      <RouterProvider router={router} />
    </div>
  );
}
