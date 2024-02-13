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
import { SearchProvider } from "./Components/Context/SearchContext";
const queryClient = new QueryClient();
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
        // children: [
        //   {
        //     path: "resultscontainer",
        //     element: <ResultContainer />,
        //   },
        // ],
      },
      {
        path: "tvshows",
        element: <TvShows />,
        // children: [
        //   {
        //     path: "resultscontainer",
        //     element: <ResultContainer />,
        //   },
        // ],
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "searchcontainer",
        element: <SearchContainer />,
      },
      {
        path: "resultscontainer",
        element: <ResultContainer />,
      },
    ],
  },
]);
function App() {
  return (
    <SearchProvider>
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
    </SearchProvider>
  );
}

export default App;
