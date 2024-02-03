import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>this link do not  not exsit</h1>
      <NavLink to="/">Go home</NavLink>
    </div>
  );
}
