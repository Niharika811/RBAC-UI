import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext'; 

const CreatorNav = () => {
  const { logout } = useUserAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogOut = () => {
    logout(); // Calling the logout function from the context
  };

  return (
    <>
      {/* Button to toggle sidebar visibility on smaller screens */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden fixed top-4 left-4 mt-10 z-50 bg-[#2B3A33] p-3 rounded text-[#F09120]"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar component with dynamic visibility */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#2B3A33] shadow-lg flex flex-col transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:w-64 font-sans`} // Ensure proper template literal
      >
        {/* Sidebar Header */}
        <div className="p-6 text-2xl font-bold text-[#F09120] border-b border-gray-600">
          Creator Role
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {/* Link to the 'Publised Blogs' section */}
            <li>
              <Link
                to="/creator"
                className="block p-4 rounded-md text-lg text-white bg-transparent hover:bg-[#3C4C43] hover:text-[#F09120] transition"
              >
                Past Blogs
              </Link>
            </li>

            {/* Link to the 'Write a Blog' section */}
            <li>
              <Link
                to="/creator/write"
                className="block p-4 rounded-md text-lg text-white bg-transparent hover:bg-[#3C4C43] hover:text-[#F09120] transition"
              >
                Write a Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-600">
          <button
            onClick={handleLogOut}
            className="w-full p-3 text-center bg-red-600 rounded-md hover:bg-red-700 transition text-lg font-medium text-white"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default CreatorNav;
