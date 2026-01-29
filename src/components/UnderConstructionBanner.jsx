import React from 'react';

const UnderConstructionStrip = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white text-center py-2 z-50">
      <p className="text-md font-semibold flex justify-center items-center">
        <span className="mr-2">🚀</span> I'm open to Summer 2026 intern roles, and Spring 2027 Full Time Roles.{' '}
        <a href="mailto:bishalbash333@gmail.com" className="ml-2 underline hover:text-gray-300 transition-colors">
          Say Hi!
        </a>
      </p>
    </div>
  );
};

export default UnderConstructionStrip;
