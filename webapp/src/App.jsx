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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Wrapper>
          <OnAir />
        </Wrapper>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
