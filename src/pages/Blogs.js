// Blogs.js
import React from 'react';
import { blogList } from '../helpers/BlogList';
import BlogCard from '../components/BlogCard'
import '../styles/Blogs.css';

const Blogs = () => {
  return (
    <div className="blogs-container">
      {blogList.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
