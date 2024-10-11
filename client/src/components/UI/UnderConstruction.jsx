import { Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 rounded-lg bg-transparent p-8 text-center">
      <h1 className="mb-4 text-5xl font-bold text-gray-800">
        🚧 Under Construction 🚧
      </h1>

      <p className="mb-6 w-[350px] text-lg text-gray-600">
        This page is currently under development. Please check back later!
      </p>

      <Link
        className="inline-block rounded bg-red-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-red-600"
        to="/"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default UnderConstruction;
