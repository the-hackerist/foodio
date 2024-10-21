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
      // setFilePercentage(0);
    }
  }, [file]);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();

      setProfile(userData);
    };

    fetchUser();
  }, []);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setFileUploadError(false);

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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfile({ ...profile, profileImage: downloadURL });
          setFileUploadError(false);
        });
      },
    );
  };

  const onChangeProfile = (e) =>
    setProfile({ ...profile, [e.target.id]: e.target.value });

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(profile);

    inputRef.current.blur();
  };

  const handleSaveProfileImage = () => {
    updateProfile({ ...user, profileImage: profile.profileImage });
    handleCancel();
  };

  const handleCancel = () => {
    setProfile({ ...profile, profileImage: user.profileImage });
    setFileUploadError(false);
    setFile(undefined);
    setFilePercentage(0);
  };

  return (
    <div className="flex w-full flex-col divide-y divide-red-300 px-8 pt-4">
      <div className="py-4">
        <p className="text-xl font-semibold">My Profile</p>
        <p className="text-sm">Manage and protect your account</p>
      </div>

      <div className="flex w-full flex-col justify-end gap-4 divide-y divide-red-300 pt-8 sm:flex-row sm:divide-x sm:divide-y-0">
        <form
          onSubmit={handleUpdateProfile}
          className="flex w-full divide-x pr-8"
        >
          {loading ? (
            <Loader />
          ) : (
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-sm text-[#555555CC] sm:text-base">
                      Email
                    </p>
                  </td>
                  <td className="flex gap-2 px-2 py-4">
                    <p>{user.email}</p>
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-4">
                    <p className="text-end text-sm text-[#555555CC] sm:text-base">
                      Username
                    </p>
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
                  <td className="py-4 pr-2">
                    <p className="text-end text-sm text-[#555555CC] sm:text-base">
                      First Name
                    </p>
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
                  <td className="py-4 pr-2">
                    <p className="text-end text-sm text-[#555555CC] sm:text-base">
                      Last Name
                    </p>
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
                    <p className="text-end text-sm text-[#555555CC] sm:text-base">
                      {" "}
                      Phone
                    </p>
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
                  <td colSpan="2" className="flex w-full gap-2 px-2 py-4">
                    <button className="w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white sm:w-fit">
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </form>

        <div className="flex flex-col items-center justify-center gap-6 px-10 pt-8 sm:w-[300px] sm:pt-0">
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

          {filePercentage > 0 && filePercentage < 100 && (
            <p className="text-sm font-semibold text-slate-500">
              {`Uploading ${filePercentage}%`}
            </p>
          )}

          {filePercentage === 100 && !fileUploadError ? (
            <p className="text-center text-sm font-semibold text-green-500 sm:text-start">
              Image was successfully uploaded!
            </p>
          ) : (
            fileUploadError && (
              <p className="w-[200px] text-center text-sm font-semibold text-red-500">
                Something went wrong! please check image size and try again.
              </p>
            )
          )}

          {!fileUploadError && filePercentage === 100 ? (
            <div className="flex gap-2">
              <button
                onClick={handleSaveProfileImage}
                className="w-[80px] rounded-md border bg-red-500 px-4 py-2 font-semibold text-white"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="w-[80px] rounded-md border border-[#cccccc] bg-transparent px-4 py-2 text-[#555555]"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileRef.current.click()}
              className="rounded-md border border-[#cccccc] bg-transparent px-4 py-2 text-[#555555]"
              disabled={
                filePercentage > 0 && filePercentage < 100 ? true : false
              }
            >
              Select Image
            </button>
          )}

          <p className="text-md text-center text-[#999999]">
            File size: maximum 2 MB
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
