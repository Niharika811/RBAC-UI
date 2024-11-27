import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserAuthProvider } from './context/UserAuthContext'; 
import App from './App';
import { BlogDataProvider } from './context/BlogDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthProvider> 
      <BlogDataProvider> 
        <App />
      </BlogDataProvider>
    </UserAuthProvider>
  </React.StrictMode>
);
