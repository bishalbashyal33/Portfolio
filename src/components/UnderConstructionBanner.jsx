import React from 'react';

const UnderConstructionStrip = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white text-center py-2 z-50">
      <p className="text-md font-semibold flex justify-center items-center">
        <span className="mr-2">🚧</span> This website is being Updated.
      </p>
    </div>
  );
};

export default UnderConstructionStrip;
