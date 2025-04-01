const PageSkeletion = () => {
  // Page skeletion with grids as a placeholder full page
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse rounded-lg shadow-md h-48"
        >
          <div className="h-full w-full bg-gray-300 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default PageSkeletion;
