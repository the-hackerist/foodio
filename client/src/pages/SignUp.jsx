import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="py-20 pt-40 flex justify-center px-10 bg-gradient-to-b from-[#F8DBDC] via-[#F8E7E7]to-[#F9F9F9]">
      <div className="flex flex-col items-center w-screen">
        <h2 className="text-5xl font-bold text-[#311F09]">Sign up</h2>

        <form className="flex flex-col gap-6 py-10 w-full max-w-[500px] md:gap-8">
          <input
            className="p-4 border rounded-lg"
            type="text"
            placeholder="username"
            id="username"
          />

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

          <input
            className="p-4 border rounded-lg"
            type="password"
            placeholder="confirm password"
            id="confirmPassword"
          />

          <p className="text-sm">
            Already registered?{" "}
            <Link
              to="/log-in"
              className="text-blue-700 font-semibold hover:underline cursor-pointer"
            >
              Log in
            </Link>
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              role="button"
              to="/sign-up"
              className="bg-red-500 rounded-lg p-4 uppercase font-bold text-white flex-1 cursor-pointer hover:opacity-95 text-center"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
