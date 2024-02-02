// import Wrapper from "./Components/wrapper";
// export default function App() {
//   return (
//     <div className="text-white w-full h-full">
//       <Wrapper />
//     </div>
//   );
// }import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/1.container/Home"; // Import your container components
import Movies from "./Components/2.SideBar/Movies";
import TvShows from "./Components/2.SideBar/TvShows";
import Library from "./Components/2.SideBar/Library";
import Wrapper from "./Components/Wrapper"; // Import your layout component
import NotFound from "./Components/1.container/NotFound";
import SearchContainer from "./Components/1.container/SearchContainer";
import MyProvider from "./Routers/SearchProvider";
import SearchBar from "./Components/1.container/SearchBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
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
      <Wrapper>
        <MyProvider>
          <SearchBar />
          <SearchContainer />
        </MyProvider>
      </Wrapper>
    </RouterProvider>
  );
}

export default App;
