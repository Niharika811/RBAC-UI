import React, { useState, useEffect } from "react";
import { useBlogs } from "../context/BlogDataContext";
import CSidebar from "../components/CreatorNav";  

const PublishedBlogs = () => {
  const { blogs } = useBlogs();  
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);  
    };
  }, [search]);

  // Filter blogs based on debounced search term
  const filteredBlogs = blogs.filter((blog) => 
    blog.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <CSidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-8 ml-64"> 
        <h1 className="text-3xl font-bold text-[#1f2937] mb-6">Your Published Blogs</h1>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Search your blogs..." 
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        />

      
        <div className="space-y-6">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-[#1f2937]">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{blog.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PublishedBlogs;
