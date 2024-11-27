import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const mockUsers = [
  { email: "admin@1.com", password: "admin123", role: "admin" },
  { email: "user@1.com", password: "user123", role: "user" },
  { email: "creator@1.com", password: "creator123", role: "vendor" },
];

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useUserAuth();

  const navigateBasedOnRole = (role) => {
    const roleRoutes = {
      admin: "/dashboard",
      user: "/user",
      vendor: "/creator",
    };
    navigate(roleRoutes[role] || "/");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const userAuthData = { email: user.email, role: user.role };
      localStorage.setItem("auth", JSON.stringify(userAuthData));
      setAuth(userAuthData);
      navigateBasedOnRole(user.role);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(to right, #1f2937, #374151)", // Background gradient
      }}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
        style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <h1
          className="text-4xl font-extrabold text-center mb-6"
          style={{ color: "#1f2937" }}
        >
          Login
        </h1>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-2"
              style={{ color: "#1f2937" }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#1f2937",
                focusRingColor: "#1f2937",
              }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-semibold mb-2"
              style={{ color: "#1f2937" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#1f2937",
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
