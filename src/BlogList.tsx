import React from 'react';
import IBlogEntry from './IBlogEntry';

interface BlogListProps {
  blogs: IBlogEntry[],
  title: string,
  handleDelete: (id: number) => void
}

const BlogList = ({ blogs, title, handleDelete }: BlogListProps) => {
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;