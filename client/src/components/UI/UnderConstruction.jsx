import { Link } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";

function UnderConstruction() {
  const { setMenu } = useMenu();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 rounded-lg bg-transparent text-center">
      <h1 className="w-full text-xl font-bold text-gray-800 md:text-5xl">
        🚧 Under Construction 🚧
      </h1>

      <p className="w-[350px] px-8 text-xs text-gray-600 md:text-lg">
        This page is currently under development. Please check back later!
      </p>

      <Link
        className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-red-600 md:text-lg"
        to="/"
        onClick={() => setMenu("home")}
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default UnderConstruction;
