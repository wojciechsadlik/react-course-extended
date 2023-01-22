import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {IBlogEntryGet} from './IBlogEntry';
import useFetch, {IUseFetchOutProps} from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isPending, error}: IUseFetchOutProps<IBlogEntryGet>
    = useFetch<IBlogEntryGet>("http://localhost:8000/blogs/" + id);
  
  const navigate = useNavigate();
  
  const handleDeleteClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h3>Written by {blog.author}</h3>
          <div>{blog.body}</div>
          <button onClick={handleDeleteClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;