import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/blog/first-post.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="container py-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
