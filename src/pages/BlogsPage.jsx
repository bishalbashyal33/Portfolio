import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

          return { folder, title, thumbnail, excerpt, date: "Feb 6, 2025", category: "AI & Engineering" };
        });

        Promise.all(promises).then((data) => {
          setBlogs(data);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.error("Error loading blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f3f3] pt-48 pb-20">
      <SEO
        title="Technical BLOGS"
        description="In this section, I talk about AI, Building Scalable Systems, My Experiences and Past Projects."
        image="https://bishalb.com/og-image.jpg"
        url="/blogs"
        type="website"
      />

      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Technical BLOGS 📝</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            In this section, I talk about AI, Building Scalable Systems, My Experiences and Past Projects.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map(({ folder, title, thumbnail, excerpt, date, category }) => (
              <Link to={`/blog/${folder}`} key={folder} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full transform group-hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider">
                        {category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{date}</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>

                    <h2 className="text-2xl text-black font-bold mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                      {title}
                    </h2>

                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-black font-bold text-sm">Read Article</span>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        →
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
