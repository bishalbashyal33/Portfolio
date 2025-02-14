import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NotionMarkdownRenderer = ({ filePath }) => {
  const [content, setContent] = useState("");
  
  // Define your replacement image URL
  const replacementImageUrl = "https://www.consultbc.com/wp-content/uploads/2016/05/online-942408_960_720.jpg";
  const getBasePath = (path) => {
    // Find the last occurrence of '/'
    const lastSlashIndex = path.lastIndexOf('/');
    if (lastSlashIndex === -1) return '';
    return path.substring(0, lastSlashIndex + 1);  // Include the trailing slash
  };
  
  const basePath = getBasePath(filePath);
  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading markdown file:", err));
  }, [filePath]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border border-gray-300">
      {/* Header for a Notion-style feel */}
      <div className="mb-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-yellow-300 rounded-md flex items-center justify-center text-2xl">
          📖
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-6 mb-2 border-b pb-2" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold mt-6 mb-2 text-blue-600" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-medium mt-5 mb-2 text-gray-700" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-800 leading-relaxed text-lg mb-4" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-yellow-500 bg-yellow-100 p-4 italic text-gray-700 rounded-md" {...props} />
          ),
          code: ({ inline, className, children, ...props }) =>
            inline ? (
              <code className="bg-gray-200 text-red-600 px-2 py-1 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            ) : (
              <SyntaxHighlighter style={atomOneDark} language="javascript" PreTag="div">
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ),
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 space-y-2 text-gray-900" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-5 space-y-2 text-gray-900" {...props} />
          ),
          li: ({ node, children, ...props }) => {
            if (children[0]?.props?.node?.checked !== undefined) {
              return (
                <li className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked={children[0].props.node.checked} className="w-4 h-4 rounded" />
                  <span className="text-gray-800">{children.slice(1)}</span>
                </li>
              );
            }
            return <li className="leading-relaxed">{children}</li>;
          },
          a: ({ node, ...props }) => (
            <a className="text-blue-500 hover:underline" {...props} />
          ),
          // Add custom image component to replace all image sources
          img: ({ node, src, ...props }) => {
            // Check if the src is already an absolute URL
            const isAbsoluteUrl = src && (src.startsWith('http://') || src.startsWith('https://'));
            const finalSrc = isAbsoluteUrl ? src : `${basePath}${src}`;
            
            return (
              <img
                src={finalSrc}
                alt={props.alt || "Image"}
                className="my-4 rounded-lg shadow-md max-w-full h-auto"
                {...props}
              />
            );
          },
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">{props.children}</table>
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-gray-100">{props.children}</thead>,
          th: ({ node, ...props }) => (
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{props.children}</th>
          ),
          td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2">{props.children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default NotionMarkdownRenderer;