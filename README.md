Admin Dashboard - Role-Based Access Control (RBAC)
This project implements a frontend for an Admin Dashboard where an admin can manage users, assign roles (creator or user), and allow creators to create and manage posts. Users can view posts and follow creators. The application demonstrates Role-Based Access Control (RBAC) using modern React techniques.

Table of Contents
Project Overview
Features
Technologies Used
Project Structure
State Management
Routing & Permissions
How to Run the Project
Conclusion
Project Overview
The Admin Dashboard enables the following functionalities:

Admin Features
-View and manage users and creators.
-Assign or toggle roles between users and creators.
-Add new members to the system.

Creator Features
-Create new posts.
-View and manage past posts.

User Features
-View posts.
-Follow and unfollow creators.

Features
Admin Features
-Role Management: Toggle user roles between "user" and "creator."
-User Management: Add or remove users from the system.

Creator Features
-Post Creation: Write, edit, and manage posts using TinyMCE text editor.
-Post History: View previously published posts.

User Features
-Post Viewing: Browse posts created by creators.
-Follow Creators: Follow or unfollow creators.

Shared Features
-Protected Routes: Ensure users can only access authorized pages based on their roles.
-Optimized UI: Includes a shimmer loading effect and debounce for smooth input handling.
-Responsive Design: Features a mobile-friendly, toggleable sidebar.

Technologies Used
-React: For building UI components.
-React Context API: For managing global state (e.g., user roles, posts).
-React Router: For handling navigation and protected routes.
-Reducer: For centralized state management.
-Tailwind CSS: For styling components and ensuring a responsive layout.
-TinyMCE: A rich text editor for creating posts.
-Shimmer Effect: For skeleton loading during data fetching.
-Debounce: For efficient handling of input events like search or form submissions.

Project Structure
src/
├── components/                        # Contains reusable UI components
│   ├── forms/                         # Form-related components
│   │   ├── AddUserModal/              # Modal for adding a new user
│   │   ├── UserLogin/                 # User login form
│   ├── CreatorNav/                    # Navigation bar for creators (for their dashboard)
│   ├── LoadingPlaceholder/            # Component showing a shimmer loading effect
│   ├── UserSidebar/                   # Sidebar for users with navigation options
├── context/                           # Contexts for managing global state
│   ├── BlogDataContext/               # Manages blog-related data (e.g., fetching, adding posts)
│   ├── UserAuthContext/               # Manages user authentication state (login/logout, roles)
├── pages/                             # Different pages of the application
│   ├── AdminDashboard/                # Dashboard for admin users to manage roles, users, etc.
│   ├── CreatorsFollowing/             # Page for users to follow and unfollow creators
│   ├── PublishedBlogs/                # Page showing a creator's published blogs
│   ├── UnAuthorized/                  # Page shown when a user tries to access unauthorized resources
│   ├── UserDashboard/                 # User dashboard page that shows posts from followed creators
│   ├── WriteBlog/                     # Page for creators to write and publish new blog posts
├── utils/                             # Utility functions or helpers
│   ├── reducer                        # Reducer file for managing complex state (user roles, blog management)
├── App.jsx                            # Main application component that handles routing and UI
├── protectedRoute.jsx                 # Handles logic for protected routes (role-based access control)


State Management
The project uses React Context API and Reducer for efficient state management:

Context API: Manages global states such as user roles, posts, and login status, avoiding the need for prop drilling.
Reducer: Centralizes state updates like adding or deleting users, toggling roles, and managing posts.
Routing & Permissions
Protected Routes
Ensures users can only access pages they’re authorized for, based on roles. Unauthorized users are redirected to an "Unauthorized" page.
Role-Based Access Control (RBAC)
Admin: Manage users and their roles (user/creator).
Creators: Create and view posts.
Users: View posts and follow creators.
How to Run the Project
Prerequisites
Ensure you have the following installed:

Node.js
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Niharika0811
cd VRV-security-assignment
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Running the Development Server
Start the development server:

bash
Copy code
npm start
# or
yarn start
Open your browser and visit http://localhost:3000

Conclusion
This application demonstrates Role-Based Access Control (RBAC) in React through features like user management, post creation, and efficient state management using Context API and Reducer. Designed for scalability and user-friendliness, it utilizes modern frontend practices to deliver an optimized and responsive experience.