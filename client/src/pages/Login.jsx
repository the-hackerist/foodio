/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/UserContext";

import PasswordInput from "../components/UI/PasswordInput";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isPassVisible, setIsPassVisible] = useState(false);

  const { email, password } = formData;

  const { error, loading, signIn, resetError } = useAuth();

  const ref = useRef(null);

  useEffect(() => {
    resetError();
  }, []);

  useEffect(() => {
    ref.current.focus();
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  const handleFormData = (e) => {
    setFormData((data) => ({ ...data, [e.target.id]: e.target.value }));
  };

  return (
    <div className="via-[#F8E7E7]to-[#F9F9F9] flex justify-center bg-gradient-to-b from-[#F8DBDC] px-10 py-20 pt-40">
      <div className="flex w-screen flex-col items-center">
        <h2 className="text-5xl font-bold text-[#311F09]">Log in</h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[500px] flex-col gap-6 py-10 md:gap-8"
        >
          <input
            ref={ref}
            className="rounded-lg border p-4"
            type="email"
            value={email}
            onChange={handleFormData}
            placeholder="email"
            id="email"
            required
          />

          <PasswordInput
            id="password"
            name={formData.password}
            placeholder="password"
            isVisible={isPassVisible}
            setIsVisible={setIsPassVisible}
            handleFormData={handleFormData}
          />

          {error && (
            <div className="rounded-lg border-2 border-red-500 bg-red-100 p-1">
              <p className="w-full text-center text-sm font-semibold text-red-500">
                {error}
              </p>
            </div>
          )}

          {/* <p className="text-sm">
            Forgot your password?{" "}
            <span className="cursor-pointer font-semibold text-blue-700 hover:underline">
              Click here
            </span>
          </p> */}

          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <input
              type="submit"
              value={loading ? "Logging in..." : "Log in"}
              disabled={loading}
              className="flex-1 cursor-pointer rounded-lg bg-red-500 p-4 font-bold uppercase text-white hover:opacity-95 disabled:opacity-80"
            />

            {!loading && (
              <Link
                role="button"
                to="/sign-up"
                className="flex-1 rounded-lg border-2 border-red-400 p-4 text-center font-bold uppercase text-red-400 hover:border-red-500 hover:bg-red-50 hover:text-red-500"
              >
                Sign up
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
