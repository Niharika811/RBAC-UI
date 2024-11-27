import React, { useState } from "react";
import { useBlogs } from "../context/BlogDataContext";
import CSidebar from "../components/CreatorNav";
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog } = useBlogs();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (title.trim() && content.trim()) {
      addBlog({ title, content, date: new Date().toLocaleDateString() });
      setTitle("");  
      setContent(""); 
      toast.success("Blog published!", {
        className: "toast-success", 
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: true,
      });
    } else {
      toast.error("Please fill in both title and content.", {
        className: "toast-error",
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="write-blog-container flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <CSidebar />
      <main className="ml-64 flex-1 p-8 bg-white rounded-lg shadow-md">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Write a New Blog Post</h1>
        
        {/* Blog Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Editor */}
          <div>
            <Editor
              apiKey="5083xkfxzya1gw9hg9bzlqc7xfdubn41kdgucyazcm1aqs4v" 
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
              init={{
                height: 400,
                toolbar: "undo redo | bold italic underline | link image",
                menubar: false,
              }}
              className="w-full bg-white rounded-md border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </main>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default WriteBlog;
