// import Wrapper from "./Components/wrapper";
// export default function App() {
//   return (
//     <div className="text-white w-full h-full">
//       <Wrapper />
//     </div>
//   );
// }
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./Components/2.SideBar/Movies";
import TvShows from "./Components/2.SideBar/TvShows";
import Library from "./Components/2.SideBar/Library";
import Home from "./Components/1.container/Home";
import NotFound from "./NotFound";
import Wrapper from "./Components/Wrapper";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/tvshows",
      element: <TvShows />,
    },
    {
      path: "/libraray",
      element: <Library />,
    },
  ]);
  return (
    <div className="text-white">
      {/* <RouterProvider router={router} /> */}
      <Wrapper />
    </div>
  );
}
