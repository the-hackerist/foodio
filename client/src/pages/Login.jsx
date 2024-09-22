import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="py-20 pt-40 flex justify-center px-10 bg-gradient-to-b from-[#F8DBDC] via-[#F8E7E7]to-[#F9F9F9]">
      <div className="flex flex-col items-center w-screen">
        <h2 className="text-5xl font-bold text-[#311F09]">Log in</h2>

        <form className="flex flex-col gap-6 py-10 w-full max-w-[500px] md:gap-8">
          <input
            className="p-4 border rounded-lg"
            type="email"
            placeholder="email"
            id="email"
          />

          <input
            className="p-4 border rounded-lg"
            type="password"
            placeholder="password"
            id="password"
          />

          <p className="text-sm">
            Forgot your password?{" "}
            <span className="text-blue-700 font-semibold hover:underline cursor-pointer">
              Click here
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input
              type="submit"
              value="Log in"
              className="bg-red-500 rounded-lg p-4 uppercase font-bold text-white flex-1 cursor-pointer hover:opacity-95"
            />

            <Link
              role="button"
              to="/sign-up"
              className="border-2 border-red-400 rounded-lg text-red-400 p-4 uppercase font-bold flex-1 hover:bg-red-50 hover:text-red-500 hover:border-red-500 text-center"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
