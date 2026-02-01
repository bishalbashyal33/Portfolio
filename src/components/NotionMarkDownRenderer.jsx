import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NotionMarkdownRenderer = ({ filePath, bare = false }) => {
  const [content, setContent] = useState("");

  // Define your replacement image URL
  const getBasePath = (path) => {
    const lastSlashIndex = path.lastIndexOf('/');
    if (lastSlashIndex === -1) return '';
    return path.substring(0, lastSlashIndex + 1);
  };

  const basePath = getBasePath(filePath);
  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading markdown file:", err));
  }, [filePath]);

  const renderContent = () => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold mt-6 mb-4 border-b pb-2 text-gray-900" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-900" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-medium mt-6 mb-3 text-gray-700" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-gray-800 leading-relaxed text-lg mb-6" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-black bg-gray-50 p-6 italic text-gray-800 rounded-r-md my-6" {...props} />
        ),
        code: ({ inline, className, children, ...props }) =>
          inline ? (
            <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono border border-gray-200" {...props}>
              {children}
            </code>
          ) : (
            <SyntaxHighlighter style={atomOneDark} language="javascript" PreTag="div" className="rounded-lg shadow-md my-6">
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ),
        pre: ({ node, ...props }) => (
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-800 text-lg" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-800 text-lg" {...props} />
        ),
        li: ({ node, children, ...props }) => (
          <li className="leading-relaxed">{children}</li>
        ),
        a: ({ node, ...props }) => (
          <a className="text-black font-semibold hover:underline decoration-2" {...props} />
        ),
        img: ({ node, src, ...props }) => {
          const isAbsoluteUrl = src && (src.startsWith('http://') || src.startsWith('https://'));
          const finalSrc = isAbsoluteUrl ? src : `${basePath}${src}`;
          return (
            <div className="my-10">
              <img
                src={finalSrc}
                alt={props.alt || "Image"}
                className="rounded-xl shadow-lg w-full h-auto object-cover border border-gray-100"
                {...props}
              />
              {props.alt && <p className="text-center text-sm text-gray-500 mt-2 italic">{props.alt}</p>}
            </div>
          );
        },
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-8 shadow-sm rounded-lg border border-gray-200">
            <table className="w-full border-collapse">{props.children}</table>
          </div>
        ),
        thead: ({ node, ...props }) => <thead className="bg-gray-50 border-b border-gray-200">{props.children}</thead>,
        th: ({ node, ...props }) => (
          <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase tracking-wider text-sm">{props.children}</th>
        ),
        td: ({ node, ...props }) => <td className="px-6 py-4 border-t border-gray-100 text-gray-800">{props.children}</td>,
      }}
    >
      {content}
    </ReactMarkdown>
  );

  if (bare) {
    return renderContent();
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border border-gray-300">
      <div className="mb-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-2xl border border-gray-200">
          📖
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      </div>
      {renderContent()}
    </div>
  );
};

export default NotionMarkdownRenderer;