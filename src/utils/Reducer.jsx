// Define the action types as constants to avoid typos and ensure consistency.
export const actionTypes = {
  ADD_MEMBER: "ADD_MEMBER",
  DELETE_MEMBER: "DELETE_MEMBER",
  UPDATE_MEMBER_ROLE: "UPDATE_MEMBER_ROLE",
  ADD_ROLE: "ADD_ROLE",
  REMOVE_ROLE: "REMOVE_ROLE",
};

// Set the initial state with members and roles.
export const initialState = {
  members: [],  // List of members
  roles: ["user", "creator"], // Initial roles available
};

// The reducer function to handle state changes based on actions dispatched.
export const reducer = (state, action) => {
  switch (action.type) {
    // Case to add a new member
    case actionTypes.ADD_MEMBER:
      return {
        ...state,
        members: [
          ...state.members, 
          { 
            id: Date.now(), // Unique ID using timestamp
            email: action.payload.email, 
            role: action.payload.role 
          },
        ],
      };

    // Case to delete a member by their ID
    case actionTypes.DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };

    // Case to update the role of a specific member
    case actionTypes.UPDATE_MEMBER_ROLE:
      return {
        ...state,
        members: state.members.map((member) =>
          member.id === action.payload.id
            ? { ...member, role: action.payload.role }
            : member
        ),
      };

    // Case to add a new role to the roles array
    case actionTypes.ADD_ROLE:
      return {
        ...state,
        roles: [...state.roles, action.payload], // Append new role
      };

    // Case to remove an existing role from the roles array
    case actionTypes.REMOVE_ROLE:
      return {
        ...state,
        roles: state.roles.filter((role) => role !== action.payload), // Remove specific role
      };

    // Default case to return current state if no valid action type is matched
    default:
      return state;
  }
};
