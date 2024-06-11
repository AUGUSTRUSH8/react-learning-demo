import React from 'react';

function BlogItem({ title, content }) {
  return (
    <div className="blog-item">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogItem;
