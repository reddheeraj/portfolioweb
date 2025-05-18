// BlogCard.js
import React from 'react';
import '../styles/Blogs.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <h2>{blog.title}</h2>
        <p className="blog-desc">{blog.description}</p>
        <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-link">Read More →</a>
      </div>
    </div>
  );
};

export default BlogCard;
