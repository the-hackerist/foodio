/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Loader from "./Loader";

const LoadingImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${className}`}
        >
          <Loader />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default LoadingImage;
