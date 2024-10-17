/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

import { useAuth } from "../../contexts/UserContext";

import Loader from "../UI/Loader";

const profileImage =
  "https://images.pexels.com/photos/9117796/pexels-photo-9117796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function Account() {
  const { user, getUser, updateProfile, loading } = useAuth();

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
  });

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();

      setProfile(userData);
    };

    fetchUser();
  }, []);

  const onChangeProfile = (e) =>
    setProfile({ ...profile, [e.target.id]: e.target.value });

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(profile);

    inputRef.current.blur();
  };

  return (
    <div className="flex w-full flex-col divide-y divide-red-300 px-8 pt-4">
      <div className="py-4">
        <p className="text-xl font-semibold">My Profile</p>
        <p className="text-sm">Manage and protect your account</p>
      </div>

      <div className="flex w-[800px] divide-x divide-red-300 pt-8">
        <form
          onSubmit={handleUpdateProfile}
          className="w- flex w-[530px] divide-x pr-8"
        >
          {loading ? (
            <Loader />
          ) : (
            <table className="w-[500px]">
              <tbody>
                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-[#555555CC]">Email</p>
                  </td>
                  <td className="flex gap-2 px-2 py-4">
                    <p>{user.email}</p>
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-[#555555CC]">Username</p>
                  </td>
                  <td className="px-2">
                    <input
                      ref={inputRef}
                      id="username"
                      value={profile.username}
                      onChange={onChangeProfile}
                      className="w-full rounded-sm border border-[#888888] bg-transparent p-2"
                      type="text"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-[#555555CC]">First Name</p>
                  </td>
                  <td className="px-2">
                    <input
                      ref={inputRef}
                      id="firstName"
                      value={profile.firstName}
                      onChange={onChangeProfile}
                      className="w-full rounded-sm border border-[#888888] bg-transparent p-2"
                      type="text"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-[#555555CC]">Last Name</p>
                  </td>
                  <td className="px-2">
                    <input
                      ref={inputRef}
                      id="lastName"
                      value={profile.lastName}
                      onChange={onChangeProfile}
                      className="w-full rounded-sm border border-[#888888] bg-transparent p-2"
                      type="text"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-[#555555CC]"> Phone Number</p>
                  </td>
                  <td className="px-2">
                    <input
                      ref={inputRef}
                      id="phone"
                      value={profile.phone}
                      onChange={onChangeProfile}
                      className="w-full rounded-sm border border-[#888888] bg-transparent p-2"
                      type="text"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-4"></td>
                  <td className="flex gap-2 px-2 py-4">
                    <button className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white">
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </form>

        <div className="flex w-[300px] flex-col items-center justify-center gap-6">
          <div className="h-[130px] w-[130px] cursor-pointer overflow-hidden rounded-full">
            <img src={profileImage} alt="profile image" />
          </div>

          <button className="rounded-md border border-[#cccccc] bg-transparent px-4 py-2 text-[#555555]">
            Select Image
          </button>

          <div>
            <p className="text-md text-[#999999]">File size: maximum 1 MB</p>
            <p className="text-md text-[#999999]">
              File extension: .JPEG, .PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
