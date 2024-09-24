import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState({
    passwordVisibility: false,
    confirmPasswordVisibility: false,
  });

  const { passwordVisibility, confirmPasswordVisibility } =
    togglePasswordVisibility;

  const { username, email, password, confirmPassword } = formData;

  const validateFormData = () => {
    setError(null);

    if (!username) return setError("Username should not be empty");

    if (username.length < 4)
      return setError("Username must be at least 4 characters long");

    if (!email) return setError("Email should not be empty");

    if (!password) return setError("Password should not be empty");

    if (password.length < 8)
      return setError("Password must be at least 8 characters long");

    if (!confirmPassword)
      return setError("Confirm password should not be empty");

    if (confirmPassword !== password) return setError("Password do not match");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    validateFormData();

    setLoading(false);
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
            className="rounded-lg border p-4"
            type="text"
            value={username}
            maxLength={30}
            onChange={handleFormData}
            placeholder="username"
            id="username"
          />

          <input
            className="rounded-lg border p-4"
            type="email"
            value={email}
            onChange={handleFormData}
            placeholder="email"
            id="email"
          />

          <div className="relative">
            <p
              className="absolute bottom-3 right-3 top-3 flex cursor-pointer items-center justify-center rounded-full p-2 text-lg hover:bg-slate-200"
              onMouseDown={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: true,
                }))
              }
              onMouseUp={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: false,
                }))
              }
              onMouseLeave={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: false,
                }))
              }
              onTouchCancel={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: false,
                }))
              }
              onTouchEnd={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: false,
                }))
              }
              onTouchMove={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: false,
                }))
              }
              onTouchStart={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  passwordVisibility: true,
                }))
              }
            >
              {!passwordVisibility ? <FaEyeSlash className="" /> : <FaRegEye />}
            </p>

            <input
              className="w-full rounded-lg border p-4 pr-14"
              type={!passwordVisibility ? "password" : "text"}
              value={password}
              onChange={handleFormData}
              maxLength={30}
              placeholder="password"
              id="password"
            />
          </div>

          <div className="relative">
            <p
              className="absolute bottom-3 right-3 top-3 flex cursor-pointer items-center justify-center rounded-full p-2 text-lg hover:bg-slate-200"
              onMouseDown={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: true,
                }))
              }
              onMouseUp={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: false,
                }))
              }
              onMouseLeave={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: false,
                }))
              }
              onTouchCancel={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: false,
                }))
              }
              onTouchEnd={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: false,
                }))
              }
              onTouchMove={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: false,
                }))
              }
              onTouchStart={() =>
                setTogglePasswordVisibility((prev) => ({
                  ...prev,
                  confirmPasswordVisibility: true,
                }))
              }
            >
              {!confirmPasswordVisibility ? (
                <FaEyeSlash className="" />
              ) : (
                <FaRegEye />
              )}
            </p>
            <input
              className="w-full rounded-lg border p-4 pr-14"
              type={!confirmPasswordVisibility ? "password" : "text"}
              value={confirmPassword}
              onChange={handleFormData}
              maxLength={30}
              placeholder="confirm password"
              id="confirmPassword"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

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
