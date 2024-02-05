// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Components/1.container/Home"; // Import your container components
// import Movies from "./Components/2.SideBar/Movies";
// import TvShows from "./Components/2.SideBar/TvShows";
// import Library from "./Components/2.SideBar/Library";
// import Wrapper from "./Components/Wrapper"; // Import your layout component
// import NotFound from "./Components/1.container/NotFound";
// import SearchContainer from "./Components/1.container/SearchContainer";
// import { SearchProvider } from "./context/SearchContext";
// import SearchBar from "./Components/1.container/SearchBar";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Wrapper />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         // path: "home",
//         element: <Home />,
//       },
//       {
//         path: "movies",
//         element: <Movies />,
//       },
//       {
//         path: "tvshows",
//         element: <TvShows />,
//       },
//       {
//         path: "library",
//         element: <Library />,
//       },
//       {
//         path: "searchcontainer",
//         element: <SearchContainer />,
//       },
//     ],
//   },
// ]);
// function App() {
//   return (
//     <RouterProvider router={router}>
//       <Wrapper>
//         <SearchProvider>
//           <SearchBar />
//           <SearchContainer />
//         </SearchProvider>
//       </Wrapper>
//     </RouterProvider>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/1.container/Home"; // Import your container components
import Movies from "./Components/2.SideBar/Movies";
import TvShows from "./Components/2.SideBar/TvShows";
import Library from "./Components/2.SideBar/Library";
import Wrapper from "./Components/Wrapper"; // Import your layout component
import NotFound from "./Components/1.container/NotFound";
import SearchContainer from "./Components/1.container/SearchContainer";
import { SearchProvider } from "./context/SearchContext";
import SearchBar from "./Components/1.container/SearchBar";
import { QueryClient, QueryClientProvider } from "react-query";
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
          <SearchProvider>
            <SearchBar />
            <SearchContainer />
          </SearchProvider>
        </Wrapper>
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
