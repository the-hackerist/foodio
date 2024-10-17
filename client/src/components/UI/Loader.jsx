function Loader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-red-500 border-t-transparent"></div>
      <p className="mt-4 text-lg font-semibold">Loading...</p>
    </div>
  );
}

export default Loader;
