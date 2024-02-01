import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "../Components/1.container/SearchBar";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav className=" flex flex-col gap-2 ">
          <NavLink to="/">Layout</NavLink>
          <NavLink to="home">home</NavLink>
          <NavLink to="movies">movies</NavLink>
          <NavLink to="tvseries">tvseries</NavLink>
          <NavLink to="library">library</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
