import React from "react";

const LoadingPlaceholder = ({ count = 3 }) => {
  // Render a dynamic number of shimmer placeholders based on `count` prop
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div key={index} className="bg-gray-200 animate-pulse rounded-lg p-6">
      <div className="bg-gray-300 h-8 w-3/4 mb-4"></div>
      <div className="bg-gray-300 h-4 w-full"></div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {shimmerItems}
    </div>
  );
};

export default LoadingPlaceholder;
