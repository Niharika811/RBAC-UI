import React, { createContext, useState, useContext } from "react";

// Create the context for blog data
const BlogDataContext = createContext();


export const BlogDataProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([
    { 
      id: 1, 
      title: "The Future of React: What's New in React 18?", 
      content: "React 18 brings a lot of new features like automatic batching, concurrent rendering, and the new `useId` hook. In this blog, we will dive into these features and how they impact app performance.", 
      date: "2024-01-01" 
    },
    { 
      id: 2, 
      title: "Getting Started with AI: An Introduction to Machine Learning", 
      content: "Machine Learning is at the heart of Artificial Intelligence. In this blog, we’ll explore the basics of AI and how machine learning algorithms help in solving real-world problems.", 
      date: "2024-02-15" 
    },
    { 
      id: 3, 
      title: "How to Build a Chatbot with React and Node.js", 
      content: "Learn how to build a simple chatbot using React for the frontend and Node.js for the backend. We'll cover integrating AI-powered chatbot APIs into your React app for a smarter experience.", 
      date: "2024-03-10" 
    },
    { 
      id: 4, 
      title: "Exploring TensorFlow.js: Running Machine Learning Models in the Browser", 
      content: "TensorFlow.js brings machine learning capabilities directly to the browser. This tutorial will show you how to set up a simple machine learning model using TensorFlow.js in your React app.", 
      date: "2024-04-01" 
    },
    { 
      id: 5, 
      title: "React & AI: Building Intelligent User Interfaces", 
      content: "Incorporating AI into React apps can enhance the user experience by making interfaces smarter. This blog explores practical examples of using AI-powered features in React applications.", 
      date: "2024-05-18" 
    },
  ]);

  // Add a new blog to the state
  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  // Remove a blog by its id
  const deleteBlog = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter(blog => blog.id !== id));
  };

  // Update an existing blog by its id
  const updateBlog = (updatedBlog) => {
    setBlogs((prevBlogs) => 
      prevBlogs.map(blog => 
        blog.id === updatedBlog.id ? updatedBlog : blog
      )
    );
  };

  return (
    <BlogDataContext.Provider value={{ blogs, addBlog, deleteBlog, updateBlog }}>
      {children}
    </BlogDataContext.Provider>
  );
};

// Custom hook to use the blog context
export const useBlogs = () => {
  return useContext(BlogDataContext);
};
