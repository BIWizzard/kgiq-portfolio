// src/pages/BlogPost.jsx
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/blog/first-post.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="container py-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
