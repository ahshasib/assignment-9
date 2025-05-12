import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="mt-6 inline-block bg-amber-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
