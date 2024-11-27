import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext"; 

const UserSidebar = () => {
  const { logout } = useUserAuth(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFollowCreatorsOpen, setIsFollowCreatorsOpen] = useState(false); // state to toggle the follow creators section
  const [followedCreators, setFollowedCreators] = useState([]);

  const handleLogOut = () => {
    logout(); 
  };


  const creators = [
    { id: 1, name: "Creator 1" },
    { id: 2, name: "Creator 2" },
    { id: 3, name: "Creator 3" },
    { id: 4, name: "Creator 4" },
  ];

  const handleFollowCreator = (id) => {
    setFollowedCreators((prev) => {
      if (prev.includes(id)) {
        return prev.filter((creatorId) => creatorId !== id); // Unfollow if already followed
      } else {
        return [...prev, id]; // Follow the creator if not already followed
      }
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden fixed top-4 left-4 mt-10 z-50 bg-[#2B3A33] p-3 rounded text-[#F7E200]"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#2B3A33] shadow-lg flex flex-col transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-64 z-40`}
      >
        {/* Sidebar Header */}
        <div className="p-6 text-2xl font-bold text-[#F7E200] border-b border-gray-600">
          User Navigation
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/user"
                className="block p-4 rounded-md text-lg text-white bg-transparent hover:bg-[#3C4C43] hover:text-[#F7E200] transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsFollowCreatorsOpen(!isFollowCreatorsOpen)}
                className="block p-4 rounded-md text-lg text-white bg-transparent hover:bg-[#3C4C43] hover:text-[#F7E200] transition"
              >
                Follow Creators
              </button>
            </li>
          </ul>
        </nav>

        {/* Follow Creators Section */}
        {isFollowCreatorsOpen && (
          <div className="p-4 bg-[#3C4C43] text-white rounded-lg shadow-lg mt-4">
            <h3 className="text-lg font-semibold mb-4">Follow Creators</h3>
            <ul className="space-y-2">
              {creators.map((creator) => (
                <li key={creator.id} className="flex justify-between items-center">
                  <span>{creator.name}</span>
                  <button
                    onClick={() => handleFollowCreator(creator.id)}
                    className={`px-4 py-2 rounded-md ${
                      followedCreators.includes(creator.id)
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    } text-white`}
                  >
                    {followedCreators.includes(creator.id) ? "Unfollow" : "Follow"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

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

export default UserSidebar;
