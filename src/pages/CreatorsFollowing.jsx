import React, { useReducer } from "react";
import { initialState, reducer, actionTypes } from "../utils/Reducer";
import UserSidebar from "../components/UserSidebar";

const CreatorsFollowing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const creators = state.members.filter((member) => member.role === "creator");

  const toggleFollow = (id) => {
    dispatch({ type: actionTypes.TOGGLE_FOLLOW, id });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar />
      <main className="flex-1 p-8 bg-white">
        <h1 className="text-3xl font-bold">Explore Creators</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <div key={creator.id} className="creator-card p-6 bg-white rounded-lg shadow-lg">
              <h2>{creator.email}</h2>
              <button onClick={() => toggleFollow(creator.id)}>{creator.isFollowing ? "Unfollow" : "Follow"}</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CreatorsFollowing;
