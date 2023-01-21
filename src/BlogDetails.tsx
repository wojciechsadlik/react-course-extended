import React from 'react';
import {useParams} from 'react-router-dom';
import IBlogEntry from './IBlogEntry';
import useFetch, {IUseFetchOutProps} from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isPending, error}: IUseFetchOutProps<IBlogEntry>
    = useFetch<IBlogEntry>("http://localhost:8000/blogs/" + id);
  
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;