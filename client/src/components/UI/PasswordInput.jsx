/* eslint-disable react/prop-types */
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

function PasswordInput({
  name,
  isVisible,
  setIsVisible,
  handleFormData,
  placeholder,
  id,
}) {
  let inputStyle = "w-full rounded-lg border p-4";

  if (id === "newPassword" || id === "confirmPassword")
    inputStyle = "w-full rounded-sm border border-[#888888] bg-transparent p-2";

  return (
    <div className="relative">
      {name.length > 0 && (
        <p
          className="absolute bottom-3 right-3 top-3 flex cursor-pointer items-center justify-center rounded-full p-2 text-lg hover:bg-slate-200"
          onMouseDown={() => setIsVisible(true)}
          onMouseUp={() => setIsVisible(false)}
          onMouseLeave={() => setIsVisible(false)}
          onTouchCancel={() => setIsVisible(false)}
          onTouchEnd={() => setIsVisible(false)}
          onTouchMove={() => setIsVisible(false)}
          onTouchStart={() => setIsVisible(true)}
        >
          {!isVisible ? <FaEyeSlash className="" /> : <FaRegEye />}
        </p>
      )}

      <input
        className={inputStyle}
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        value={name}
        onChange={handleFormData}
        id={id}
        required
      />
    </div>
  );
}

export default PasswordInput;
