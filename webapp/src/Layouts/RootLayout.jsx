import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className=" flex flex-row ">
      <header>
        <nav className=" flex flex-col gap-2 bg-red-500 w-20 ">
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
