import React from "react";

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4">🚫</h1>
        <h2 className="text-3xl font-semibold text-gray-800">Access Denied</h2>
        <p className="text-gray-600 mt-2">Sorry, but you do not have permission to view this page.</p>
        <p className="text-gray-500 mt-1 italic">It looks like you're trying to access a restricted area. 😟</p>

        <div className="mt-6">
          <p className="text-gray-700 font-semibold">What can you do?</p>
          <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
            <li>Check your login credentials and try again.</li>
            <li>If you're supposed to have access, contact the admin.</li>
            <li>Head back to the home page and explore other features.</li>
          </ul>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
