/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/UserContext";

import PasswordInput from "../components/UI/PasswordInput";

const formDataInitialState = {
  username: "",
  email: "",
  password: "",
  confirmPass: "",
};

function SignUp() {
  const [formData, setFormData] = useState(formDataInitialState);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const { signUp, loading, error, resetError } = useAuth();

  const ref = useRef(null);

  useEffect(() => {
    resetError();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(formData);

    if (error) ref.current.focus();
  };

  const handleFormData = (e) => {
    setFormData((data) => ({ ...data, [e.target.id]: e.target.value.trim() }));
  };

  return (
    <div className="via-[#F8E7E7]to-[#F9F9F9] flex justify-center bg-gradient-to-b from-[#F8DBDC] px-10 py-20 pt-40">
      <div className="flex w-screen flex-col items-center">
        <h2 className="text-5xl font-bold text-[#311F09]">Sign up</h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[500px] flex-col gap-6 py-10 md:gap-8"
        >
          <input
            ref={ref}
            required
            className="rounded-lg border p-4"
            type="text"
            value={formData.username}
            maxLength={30}
            onChange={handleFormData}
            placeholder="username"
            id="username"
          />

          <input
            required
            className="rounded-lg border p-4"
            type="email"
            value={formData.email}
            onChange={handleFormData}
            placeholder="email"
            id="email"
          />

          <PasswordInput
            id="password"
            name={formData.password}
            placeholder="password"
            isVisible={isPassVisible}
            setIsVisible={setIsPassVisible}
            handleFormData={handleFormData}
          />

          <PasswordInput
            id="confirmPass"
            name={formData.confirmPass}
            placeholder="confirm password"
            isVisible={isConfirmPassVisible}
            setIsVisible={setIsConfirmPassVisible}
            handleFormData={handleFormData}
          />

          {error && (
            <p className="text-sm font-semibold text-red-500">{error}</p>
          )}

          <p className="text-sm">
            Already registered?{" "}
            <Link
              to="/log-in"
              className="cursor-pointer font-semibold text-blue-700 hover:underline"
            >
              Log in
            </Link>
          </p>

          <button
            className="w-full cursor-pointer rounded-lg bg-red-500 p-4 text-center font-bold uppercase text-white hover:opacity-95"
            disabled={loading}
          >
            <Link to="/sign-up">
              {loading ? "creating account..." : "create account"}
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
