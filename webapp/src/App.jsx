import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/1.container/Home"; // Import your container components
import Movies from "./Components/2.SideBar/Movies";
import TvShows from "./Components/2.SideBar/TvShows";
import Library from "./Components/2.SideBar/Library";
import Wrapper from "./Components/Wrapper"; // Import your layout component
import NotFound from "./Components/1.container/NotFound";
import SearchContainer from "./Components/1.container/SearchContainer";
import { SearchProvider } from "./context/SearchProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        // path: "home",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "tvshows",
        element: <TvShows />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "searchcontainer",
        element: <SearchContainer />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <SearchProvider>
        <Wrapper />
      </SearchProvider>
    </RouterProvider>
  );
}

export default App;
