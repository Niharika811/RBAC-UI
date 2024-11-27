import React, { useEffect, useState } from "react";
import Sidebar from "../components/UserSidebar";
import Shimmer from "../components/LoadingPlaceholder"; 

const UserDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "38f5f9451cb64232959379bc1a492d62"; 
      const url = `https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news articles");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError("Failed to load news articles");
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="text-center text-red-600 text-lg">{error}</div>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-0 sm:ml-64 flex-1 p-8 bg-[#f4f5f7]">
        <h1 className="text-3xl font-bold text-[#1f2937] mb-6">Trending News</h1>
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-[#1f2937]">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-[#1f2937] text-white rounded hover:bg-gray-800"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        ) : (
          <Shimmer />
        )}
      </main>
    </div>
  );
};

export default UserDashboard;
