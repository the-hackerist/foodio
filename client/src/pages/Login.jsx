import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="via-[#F8E7E7]to-[#F9F9F9] flex justify-center bg-gradient-to-b from-[#F8DBDC] px-10 py-20 pt-40">
      <div className="flex w-screen flex-col items-center">
        <h2 className="text-5xl font-bold text-[#311F09]">Log in</h2>

        <form className="flex w-full max-w-[500px] flex-col gap-6 py-10 md:gap-8">
          <input
            className="rounded-lg border p-4"
            type="email"
            placeholder="email"
            id="email"
          />

          <input
            className="rounded-lg border p-4"
            type="password"
            placeholder="password"
            id="password"
          />

          <p className="text-sm">
            Forgot your password?{" "}
            <span className="cursor-pointer font-semibold text-blue-700 hover:underline">
              Click here
            </span>
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <input
              type="submit"
              value="Log in"
              className="flex-1 cursor-pointer rounded-lg bg-red-500 p-4 font-bold uppercase text-white hover:opacity-95"
            />

            <Link
              role="button"
              to="/sign-up"
              className="flex-1 rounded-lg border-2 border-red-400 p-4 text-center font-bold uppercase text-red-400 hover:border-red-500 hover:bg-red-50 hover:text-red-500"
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
