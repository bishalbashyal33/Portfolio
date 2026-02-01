import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NotionMarkdownRenderer from "../components/NotionMarkDownRenderer";
import SEO from "../components/SEO";
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from "react-icons/fa";

const BlogPost = () => {
  const { folder } = useParams();
  const [blogData, setBlogData] = useState({
    title: "",
    excerpt: "",
    thumbnail: "",
    content: "",
    date: "February 6, 2025", // Default if not found
    exists: true,
    loading: true
  });
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const filePath = `/markdowns/${folder}/mapreduce.md`;
        const response = await fetch(filePath);
        if (!response.ok) throw new Error("Blog not found");

        const markdown = await response.text();
        const lines = markdown.split("\n");
        const title = lines.find(l => l.startsWith("# "))?.replace("# ", "") || folder.replace(/-/g, " ");

        const imageMatch = markdown.match(/!\[.*?\]\((.*?)\)/);
        const thumbnail = imageMatch ? `/markdowns/${folder}/${imageMatch[1]}` : "https://bishalb.com/og-image.jpg";

        const excerpt = lines.find(l => l.trim() && !l.startsWith("#"))?.substring(0, 160) || "Read this interesting article by Bishal Bashyal.";

        setBlogData({
          title,
          excerpt,
          thumbnail,
          content: markdown,
          date: "February 6, 2025",
          exists: true,
          loading: false
        });
      } catch (error) {
        console.error("Error loading blog post:", error);
        setBlogData(prev => ({ ...prev, exists: false, loading: false }));
      }
    };

    fetchBlogData();
  }, [folder]);

  // Fetch related blogs
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const indexResponse = await fetch("/markdowns/index.json");
        const folders = await indexResponse.json();

        // Filter out current blog
        const otherFolders = folders.filter(f => f !== folder);

        // Shuffle and take 3
        const shuffled = otherFolders.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        const blogPromises = selected.map(async (blogFolder) => {
          const markdown = await fetch(`/markdowns/${blogFolder}/mapreduce.md`).then(r => r.text());
          const lines = markdown.split("\n");
          const title = lines.find(l => l.startsWith("# "))?.replace("# ", "") || "Untitled";
          const imageMatch = markdown.match(/!\[.*?\]\((.*?)\)/);
          const thumbnail = imageMatch ? `/markdowns/${blogFolder}/${imageMatch[1]}` : "/default.jpg";

          return { folder: blogFolder, title, thumbnail };
        });

        const blogs = await Promise.all(blogPromises);
        setRelatedBlogs(blogs);
      } catch (error) {
        console.error("Error loading related blogs:", error);
      }
    };

    if (blogData.exists && !blogData.loading) {
      fetchRelatedBlogs();
    }
  }, [folder, blogData.exists, blogData.loading]);

  if (blogData.loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!blogData.exists) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-800">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">🚨 Blog post not found.</p>
          <Link to="/blogs" className="text-black hover:underline font-bold">Back to all blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3] pt-32 pb-20">
      <SEO
        title={blogData.title}
        description={blogData.excerpt}
        image={blogData.thumbnail}
        url={`/blog/${folder}`}
      />

      <article className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blogs" className="hover:text-black transition-colors">Blogs</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium truncate">{blogData.title}</span>
        </nav>

        {/* Header Section */}
        <header className="mb-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
              {blogData.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-gray-100">
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://raw.githubusercontent.com/bishalbashyal33/hostedpublicassets/refs/heads/main/personart.png"
                  alt="Bishal Bashyal"
                  className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-lg">Bishal Bashyal</p>
                  <p className="text-gray-500 text-sm">Updated {blogData.date}</p>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://bishalb.com/blog/${folder}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-900 hover:text-white transition-all border border-gray-200"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bishalbashyal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-900 hover:text-white transition-all border border-gray-200"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://github.com/bishalbashyal33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-900 hover:text-white transition-all border border-gray-200"
                >
                  <FaGithub size={20} />
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`https://bishalb.com/blog/${folder}`);
                    alert('Link copied to clipboard!');
                  }}
                  className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <FaLink size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <main className="w-full lg:w-3/4 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
            <NotionMarkdownRenderer bare filePath={`/markdowns/${folder}/mapreduce.md`} />

            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-6 text-center text-lg">
                Enjoyed this article? Follow me on my other socials or drop a message!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/bishal-bashyal-80a261184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all"
                >
                  <FaLinkedin size={20} />
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:bishalbash333@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all"
                >
                  Get in Touch 🚀
                </a>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">About the Author</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Bishal is an AI Software Engineer & Researcher passionate about building scalable, intelligence-driven applications.
              </p>
              <Link to="/" className="text-black font-bold text-sm hover:underline flex items-center">
                Learn more about me →
              </Link>
            </div>

            {/* Read More Section */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Read More</h3>
                <div className="space-y-4">
                  {relatedBlogs.map(({ folder: blogFolder, title, thumbnail }) => (
                    <Link
                      key={blogFolder}
                      to={`/blog/${blogFolder}`}
                      className="flex gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all"
                    >
                      <img
                        src={thumbnail}
                        alt={title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0 border border-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 line-clamp-3 leading-tight">
                          {title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
