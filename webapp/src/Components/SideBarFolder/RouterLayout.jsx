import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="">
      <header>
        <nav>
          <h1>Job routers</h1>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tvshows">TvShows</NavLink>
          <NavLink to="/library">Library</NavLink>
          
          
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
