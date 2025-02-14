import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/markdowns/index.json")
      .then((res) => res.json())
      .then((folders) => {
        const promises = folders.map(async (folder) => {
          const markdownContent = await fetch(`/markdowns/${folder}/mapreduce.md`).then((res) => res.text());

          const lines = markdownContent.split("\n");
          const title = lines.find((line) => line.startsWith("# "))?.replace("# ", "") || "Untitled";
          const imageMatch = markdownContent.match(/!\[.*?\]\((.*?)\)/);
          const thumbnail = imageMatch ? `/markdowns/${folder}/${imageMatch[1]}` : "/default.jpg";
          const excerpt = lines.find((line) => line.trim() && !line.startsWith("#")) || "No excerpt available.";

          return { folder, title, thumbnail, excerpt };
        });

        Promise.all(promises).then(setBlogs);
      })
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-48 px-4">
      <h1 className="text-2xl text-black font-bold mb-6 text-left">📝 Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(({ folder, title, thumbnail, excerpt }) => (
          <Link to={`/blog/${folder}`} key={folder} className="block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
              {/* Image and Highlight Strip */}
              <div className="relative">
                <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
               
              </div>
              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-xl text-black font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{excerpt.substring(0, 150)}...</p>
                <div className="text-sm text-gray-500">📅 February 6, 2025</div>
               
              </div>
              <div className="bg-gray-400 py-2"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
