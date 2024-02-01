import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav className=" flex gap-2 ">
          <h1>Testing</h1>
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
