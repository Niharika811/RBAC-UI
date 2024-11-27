import React, { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import { initialState, reducer, actionTypes } from "../utils/Reducer";
import { AddUserModal } from "../components/forms/AddUserModal";

// Mock data
const mockMembers = [
  { id: 1, email: "Aman@example.com", role: "user", status: "active" },
  { id: 2, email: "Ritika@example.com", role: "creator", status: "inactive" },
];

const mockRoles = ["user", "creator", "admin"];

const AdminDashboard = () => {
  const navigate = useNavigate();  // Initialize useNavigate for redirection
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    members: mockMembers,
    roles: mockRoles,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ email: "", role: "" });
  const [newRole, setNewRole] = useState("");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("members");

  useEffect(() => {
    console.log("Current members:", state.members);
    console.log("Available roles:", state.roles);
  }, [state]);

  const handleOpenModal = () => {
    setNewMember({ email: "", role: state.roles[0] });
    setIsModalOpen(true);
  };

  const handleAddMember = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(newMember.email.trim())) {
      dispatch({ type: actionTypes.ADD_MEMBER, payload: newMember });
      setNewMember({ email: "", role: state.roles[0] });
      setIsModalOpen(false);
    } else {
      alert("Please enter a valid email.");
    }
  };

  const handleRoleChange = (id, newRole) => {
    dispatch({ type: actionTypes.UPDATE_MEMBER_ROLE, payload: { id, role: newRole } });
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      dispatch({ type: actionTypes.DELETE_MEMBER, payload: id });
    }
  };

  const handleAddRole = () => {
    if (newRole.trim() && !state.roles.includes(newRole)) {
      dispatch({ type: actionTypes.ADD_ROLE, payload: newRole.trim() });
      setNewRole("");
    } else {
      alert("Invalid or duplicate role.");
    }
  };

  const handleDeleteRole = (role) => {
    if (window.confirm(`Are you sure you want to delete the role "${role}"?`)) {
      dispatch({ type: actionTypes.REMOVE_ROLE, payload: role });
    }
  };

  const handleLogout = () => {
    // Clear authentication data from localStorage
    localStorage.removeItem("auth");
    // Redirect to the login page
    navigate("/"); 
  };

  const filteredMembers = state.members.filter((member) =>
    member.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#f4f5f7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1f2937] text-white hidden lg:block shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold text-center">Admin Dashboard</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("members")}
                className={`w-full text-left px-4 py-2 text-sm font-medium ${
                  activeTab === "members" ? "bg-[#374151]" : "hover:bg-[#374151]"
                }`}
              >
                Manage Members
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("roles")}
                className={`w-full text-left px-4 py-2 text-sm font-medium ${
                  activeTab === "roles" ? "bg-[#374151]" : "hover:bg-[#374151]"
                }`}
              >
                Manage Roles
              </button>
            </li>
          </ul>
        </nav>
        <div className="mx-4" style={{ marginTop: '31rem', marginBottom: '1.5rem' }}>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 w-full"
          >
            Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{activeTab === "members" ? "Members Management" : "Roles Management"}</h1>
          {activeTab === "members" && (
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search members..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 border rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleOpenModal}
                className="px-4 py-2 text-white rounded-md bg-[rgb(79,120,148)] hover:bg-[rgb(59,77,88)] transition duration-300"
              >
                Add Member
              </button>
            </div>
          )}
        </header>

        {/* Content */}
        {activeTab === "members" && (
          <section>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead style={{ backgroundColor: "rgb(79 120 148)" }} className="text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Role</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-b">
                    <td className="py-3 px-6">{member.email}</td>
                    <td className="py-3 px-6">{member.role}</td>
                    <td className="py-3 px-6 flex items-center space-x-2">
                      <select
                        value={member.role}
                        onChange={(e) => handleRoleChange(member.id, e.target.value)}
                        className="border px-2 py-1 rounded-md"
                      >
                        {state.roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "roles" && (
          <section>
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                placeholder="Add new role"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleAddRole}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add Role
              </button>
            </div>
            <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
              {state.roles.map((role) => (
                <li key={role} className="py-3 px-6 flex justify-between items-center">
                  <span>{role}</span>
                  <button
                    onClick={() => handleDeleteRole(role)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        
      </main>

      <AddUserModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        newMember={newMember}
        setNewMember={setNewMember}
        handleAddMember={handleAddMember}
        roles={state.roles}
      />
    </div>
  );
};

export default AdminDashboard;
