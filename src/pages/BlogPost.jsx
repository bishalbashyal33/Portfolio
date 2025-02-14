import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotionMarkdownRenderer from "../components/NotionMarkDownRenderer";

const BlogPost = () => {
  const { folder } = useParams();
  const [blogExists, setBlogExists] = useState(true);

  useEffect(() => {
    const checkMarkdownFile = async () => {
      try {
        const response = await fetch(`/markdowns/${folder}/mapreduce.md`);
        if (!response.ok) throw new Error("Markdown file not found");
      } catch (error) {
        console.error("Error loading blog post:", error);
        setBlogExists(false);
      }
    };

    checkMarkdownFile();
  }, [folder]);

  if (!blogExists) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>🚨 Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black px-10 py-10">
      <h1 className="text-4xl font-bold mb-6">{folder.replace("-", " ")}</h1>
      <NotionMarkdownRenderer filePath={`/markdowns/${folder}/mapreduce.md`} />
    </div>
  );
};

export default BlogPost;
