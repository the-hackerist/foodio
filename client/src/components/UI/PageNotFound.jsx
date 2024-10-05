import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Oops! Page Not Found.</h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="mt-1 text-gray-600">
        It might have been removed, renamed, or never existed in the first
        place.
      </p>
      <Link
        to="/"
        className="mt-6 rounded bg-red-400 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
