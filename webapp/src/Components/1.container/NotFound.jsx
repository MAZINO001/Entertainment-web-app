import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-xl text-white">Oops! Looks like you are lost.</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-white text-xl flex flex-col items-center justify-center ">
        Go you back
        <NavLink
          to="/"
          class="ml-1 mt-4 px-2 py-1 rounded-md  capitalize bg-blue-500"
        >
          home
        </NavLink>
      </p>
    </div>
  );
}
