import React from 'react';
import { Link } from 'react-router-dom';
import IBlogEntry from './IBlogEntry';

interface BlogListProps {
  blogs: IBlogEntry[],
  title: string
}

const BlogList = ({ blogs, title }: BlogListProps) => {
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;