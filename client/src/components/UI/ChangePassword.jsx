import { useState } from "react";

import { useAuth } from "../../contexts/UserContext";

import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PasswordInput from "./PasswordInput";

const toastProps = {
  position: "top-center",
  autoClose: 2000,
  pauseOnFocusLoss: false,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

function ChangePassword() {
  const [verifyPassword, setVerifyPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const { verifyUser, updatePassword } = useAuth();

  const handleVerifyPassword = async (e, password) => {
    e.preventDefault();
    setError("");

    const data = await verifyUser(password);

    if (data.success !== "OK") {
      setIsVerified(false);
      setError("Entered credentials is incorrect.");
      return;
    }

    setIsVerified(true);
    setError("");
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");

    if (confirmPassword !== newPassword) {
      setError("Password does not match.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must not be less than 8 characters");
      return;
    }

    const data = await updatePassword(newPassword);

    if (data) {
      toast.success("Password changed successfully", toastProps);
    }
    // resets
    handleCancel();
  };

  function handleCancel() {
    setIsVerified(false);
    setConfirmPassword("");
    setVerifyPassword("");
    setNewPassword("");
    setError("");
  }

  return (
    <>
      <div className="flex w-full flex-col divide-y divide-red-300 px-8 pt-4">
        <div className="py-4">
          <p className="text-xl font-semibold">Change Password</p>
          <p className="text-sm">Manage or change your account password</p>
        </div>

        {/* <div className="flex divide-x divide-red-300 pt-8 sm:w-[800px]"> */}
        <div className="flex divide-x divide-red-300 pt-8">
          <form
            onSubmit={
              isVerified
                ? (e) => handleChangePassword(e)
                : (e) => handleVerifyPassword(e, verifyPassword)
            }
            className="flex pr-8"
          >
            <table className="sm:w-[500px]">
              <tbody className="">
                {!isVerified && (
                  <>
                    <tr>
                      <td className="px-2 py-4 text-sm sm:text-base">
                        <p className="text-start text-[#555555CC] sm:text-end">
                          Current Password
                        </p>
                      </td>

                      <td className="hidden flex-col justify-center gap-2 px-2 sm:flex">
                        <PasswordInput
                          name={verifyPassword}
                          handleFormData={(e) =>
                            setVerifyPassword(e.target.value)
                          }
                          isVisible={isPassVisible}
                          setIsVisible={setIsPassVisible}
                          placeholder="current password"
                          id="currentPassword"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="flex-col justify-center gap-2 px-2 sm:hidden">
                        <PasswordInput
                          name={verifyPassword}
                          handleFormData={(e) =>
                            setVerifyPassword(e.target.value)
                          }
                          isVisible={isPassVisible}
                          setIsVisible={setIsPassVisible}
                          placeholder="current password"
                          id="currentPassword"
                        />
                      </td>
                    </tr>

                    {error && (
                      <tr>
                        <td className="hidden px-2 py-4 sm:table-cell">
                          <p className="text-end text-[#555555CC]"></p>
                        </td>
                        <td className="px-2 pt-2 sm:pt-0">
                          <p className="text-xs font-semibold text-red-500">
                            {error}
                          </p>
                        </td>
                        <td className="px-2 py-4 sm:hidden">
                          <p className="text-end text-[#555555CC]"></p>
                        </td>
                      </tr>
                    )}

                    <tr className="">
                      <td className="hidden px-2 py-4 sm:table-cell"></td>
                      <td className="flex px-2 py-4">
                        <button className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white sm:w-[100px]">
                          Verify
                        </button>
                      </td>
                      <td className="px-2 py-4 sm:hidden"></td>
                    </tr>
                  </>
                )}

                {isVerified && (
                  <>
                    <tr>
                      <td className="px-2 py-4">
                        <p className="text-start text-[#555555CC] sm:text-end">
                          New Password
                        </p>
                      </td>
                      <td className="hidden px-2 sm:table-cell">
                        <PasswordInput
                          name={newPassword}
                          handleFormData={(e) => setNewPassword(e.target.value)}
                          isVisible={isPassVisible}
                          setIsVisible={setIsPassVisible}
                          placeholder="new password"
                          id="newPassword"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-2 sm:hidden">
                        <PasswordInput
                          name={newPassword}
                          handleFormData={(e) => setNewPassword(e.target.value)}
                          isVisible={isPassVisible}
                          setIsVisible={setIsPassVisible}
                          placeholder="new password"
                          id="newPassword"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-2 py-4">
                        <p className="text-start text-[#555555CC] sm:text-end">
                          Confirm Password
                        </p>
                      </td>
                      <td className="hidden px-2 sm:table-cell">
                        <PasswordInput
                          name={confirmPassword}
                          handleFormData={(e) =>
                            setConfirmPassword(e.target.value)
                          }
                          isVisible={isConfirmPassVisible}
                          setIsVisible={setIsConfirmPassVisible}
                          placeholder="confirm password"
                          id="confirmPassword"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="px-2 sm:hidden">
                        <PasswordInput
                          name={confirmPassword}
                          handleFormData={(e) =>
                            setConfirmPassword(e.target.value)
                          }
                          isVisible={isConfirmPassVisible}
                          setIsVisible={setIsConfirmPassVisible}
                          placeholder="confirm password"
                          id="confirmPassword"
                        />
                      </td>
                    </tr>

                    {error && (
                      <tr>
                        <td className="hidden px-2 py-4 sm:table-cell">
                          <p className="text-end text-[#555555CC]"></p>
                        </td>
                        <td className="px-2">
                          <p className="text-xs font-semibold text-red-500">
                            {error}
                          </p>
                        </td>
                        <td className="px-2 py-4 sm:hidden">
                          <p className="text-end text-[#555555CC]"></p>
                        </td>
                      </tr>
                    )}

                    <tr>
                      <td className="hidden px-2 py-4 sm:table-cell"></td>
                      <td className="flex gap-3 px-2 py-4 sm:gap-6">
                        <button className="w-[100px] rounded-md bg-red-500 px-4 py-2 font-semibold text-white">
                          Change
                        </button>

                        <button
                          className="w-[100px] rounded-md border border-red-500 px-4 py-2 font-semibold text-red-500"
                          type="button"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </td>
                      <td className="px-2 py-4 sm:hidden"></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
