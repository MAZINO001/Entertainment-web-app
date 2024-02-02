import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <h1> 404 the page NotFound</h1>
      <Link to="/">go home</Link>
    </div>
  );
}
