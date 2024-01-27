import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="">
      <header>
        <nav>
          <NavLink to="Home">Home</NavLink>
          <NavLink to="Movies">Movies</NavLink>
          <NavLink to="TVShows">TvShows</NavLink>
          <NavLink to="Library">Library</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
