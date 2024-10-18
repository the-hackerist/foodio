/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

import { app } from "../../firebase";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { useAuth } from "../../contexts/UserContext";

import defaultImage from "../../assets/defaultImage.png";

import Loader from "../UI/Loader";

function Account() {
  const { user, getUser, updateProfile, loading } = useAuth();

  const fileRef = useRef(null);

  const [file, setFile] = useState(undefined);

  const [fileUploadError, setFileUploadError] = useState(false);

  const [filePercentage, setFilePercentage] = useState(0);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    profileImage: user.profileImage,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },

      (error) => {
        setFileUploadError(error);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setProfile({ ...profile, profileImage: downloadURL }),
        );
      },
    );
  };

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

  const handleSaveProfileImage = () => {
    updateProfile({ ...user, profileImage: profile.profileImage });
    setFilePercentage(0);
    setFile(undefined);
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
          <div className="h-[130px] w-[130px] cursor-pointer overflow-hidden rounded-full object-cover">
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
            />
            <img
              className={`${!profile.profileImage ? "p-3" : ""} h-full w-full object-cover`}
              onClick={() => fileRef.current.click()}
              src={!profile.profileImage ? defaultImage : profile.profileImage}
              alt="profile image"
            />
          </div>

          {fileUploadError && (
            <p className="text-sm font-semibold text-red-500">
              Something went wrong!
            </p>
          )}

          {filePercentage > 0 && filePercentage < 100 && (
            <p className="text-sm font-semibold text-slate-500">
              {`uploading ${filePercentage}%`}
            </p>
          )}

          {filePercentage === 100 && (
            <p className="text-sm font-semibold text-green-500">
              Image was successfully uploaded!
            </p>
          )}

          {file ? (
            <button
              onClick={handleSaveProfileImage}
              className="rounded-md border bg-red-500 px-4 py-2 font-semibold text-white"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => fileRef.current.click()}
              className="rounded-md border border-[#cccccc] bg-transparent px-4 py-2 text-[#555555]"
            >
              Select Image
            </button>
          )}

          <div className="px-8">
            <p className="text-md text-[#999999]">File size: maximum 2 MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
