import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { useAuth } from "../../contexts/UserContext";

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

  const handleChangePassword = (e) => {
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

    updatePassword(newPassword);

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
    <div className="flex w-full flex-col divide-y divide-red-300 px-8 pt-4">
      <div className="py-4">
        <p className="text-xl font-semibold">Change Password</p>
        <p className="text-sm">Manage or change your account password</p>
      </div>

      <div className="flex w-[800px] divide-x divide-red-300 pt-8">
        <form
          onSubmit={
            isVerified
              ? (e) => handleChangePassword(e)
              : (e) => handleVerifyPassword(e, verifyPassword)
          }
          className="flex divide-x pr-8"
        >
          <table className="w-[500px]">
            <tbody>
              {!isVerified && (
                <>
                  <tr>
                    <td className="px-2 py-4">
                      <p className="text-end text-[#555555CC]">
                        Current Password
                      </p>
                    </td>

                    <td className="flex flex-col justify-center gap-2 px-2">
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
                      <td className="px-2 py-4">
                        <p className="text-end text-[#555555CC]"></p>
                      </td>
                      <td className="px-2">
                        <p className="text-xs font-semibold text-red-500">
                          {error}
                        </p>
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td className="px-2 py-4"></td>
                    <td className="flex px-2 py-4">
                      <button className="w-[100px] rounded-md bg-red-500 px-4 py-2 font-semibold text-white">
                        Verify
                      </button>
                    </td>
                  </tr>
                </>
              )}

              {isVerified && (
                <>
                  <tr>
                    <td className="px-2 py-4">
                      <p className="text-end text-[#555555CC]">New Password</p>
                    </td>
                    <td className="px-2">
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
                      <p className="text-end text-[#555555CC]">
                        Confirm Password
                      </p>
                    </td>
                    <td className="px-2">
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
                      <td className="px-2 py-4">
                        <p className="text-end text-[#555555CC]"></p>
                      </td>
                      <td className="px-2">
                        <p className="text-xs font-semibold text-red-500">
                          {error}
                        </p>
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td className="px-2 py-4"></td>
                    <td className="flex gap-6 px-2 py-4">
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
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
