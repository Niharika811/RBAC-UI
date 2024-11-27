import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/forms/UserLogin";
import ProtectedRoute from "./protectedRoute";
import AdminDashboard from "./pages/AdminDashboard"; 
import UnauthorizedPage from "./pages/Unauthorized"; 
import UserDashboard from "./pages/UserDashboard"; 
import CreatorsFollowing from "./pages/CreatorsFollowing"; 
import WriteBlog from "./pages/WriteBlog"; 
import PublishedBlogs from "./pages/PublishedBlogs"; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<UserLogin />} />

          {/* Unauthorized Page */}
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* User Dashboard and Following Management */}
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/following"
            element={
              <ProtectedRoute allowedRoles="user">
                <CreatorsFollowing />
              </ProtectedRoute>
            }
          />

          {/* Creator Routes */}
          <Route
            path="/creator"
            element={
              <ProtectedRoute allowedRoles="vendor">
                <PublishedBlogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/creator/write"
            element={
              <ProtectedRoute allowedRoles="vendor">
                <WriteBlog />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
