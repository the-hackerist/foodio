import { useState } from "react";
import PasswordInput from "./PasswordInput";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex w-full flex-col divide-y divide-red-300 px-8 pt-4">
      <div className="py-4">
        <p className="text-xl font-semibold">Change Password</p>
        <p className="text-sm">Manage or change your account password</p>
      </div>

      <div className="flex w-[800px] divide-x divide-red-300 pt-8">
        <form className="flex divide-x pr-8">
          <table className="w-[500px]">
            <tr>
              <td className="px-2 py-4">
                <p className="text-end text-[#555555CC]">Password</p>
              </td>
              <td className="px-2">
                <PasswordInput
                  name={newPassword}
                  handleFormData={(e) => setNewPassword(e.target.value)}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                  placeholder="new password"
                  id="newPassword"
                />
              </td>
            </tr>

            <tr>
              <td className="px-2 py-4">
                <p className="text-end text-[#555555CC]">Confirm Password</p>
              </td>
              <td className="px-2">
                <PasswordInput
                  name={confirmPassword}
                  handleFormData={(e) => setConfirmPassword(e.target.value)}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                  placeholder="confirm password"
                  id="confirmPassword"
                />
              </td>
            </tr>

            <tr>
              <td className="px-2 py-4"></td>
              <td className="flex gap-2 px-2 py-4">
                <button className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white">
                  Change
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
