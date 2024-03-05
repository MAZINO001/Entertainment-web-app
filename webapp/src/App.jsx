import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/1.container/Home";
import Movies from "./Components/2.SideBar/Movies";
import TvShows from "./Components/2.SideBar/TvShows";
import Library from "./Components/2.SideBar/Library";
import Wrapper from "./Components/Wrapper";
import NotFound from "./Components/1.container/NotFound";
import SearchContainer from "./Components/1.container/SearchContainer";
import OnAir from "./Components/4.TvShows-home/OnAir";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ResultContainer from "./Components/2.SideBar/ResultContainer";
import SearchBar from "./Components/1.container/SearchBar";
import SeeAllContainer from "./Components/1.container/SeeAllContainer";
import ImageContainer from "./Components/1.container/ImageContainer";
import { BookmarksProvider } from "./CustomeHooks/useLocalStorage";
import ScrollToTop from "./Loaders/ScrollToTop";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
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
        path: "search/:query/:page",
        element: <SearchContainer />,
      },

      {
        path: "all/:type/:query",
        element: <SeeAllContainer />,
      },
      {
        path: "details/:type/:id",
        element: <ImageContainer />,
      },
      {
        path: "results/:type/:id/:page",
        element: <ResultContainer />,
      },
    ],
  },
]);
function App() {
  return (
    <BookmarksProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Wrapper>
            <OnAir />
          </Wrapper>
          <SearchBar />
          <SearchContainer />
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <ScrollToTop />
    </BookmarksProvider>
  );
}
//look for ways to mkae the performence better 
//
export default App;
