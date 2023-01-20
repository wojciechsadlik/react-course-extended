import React, {useState, useEffect} from 'react';
import BlogList from './BlogList';
import IBlogEntry from './IBlogEntry';
import useFetch from './useFetch';

const Home = () => {
  const {data: blogs, isPending, error} = useFetch<IBlogEntry>("http://localhost:8000/blogs");
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs.length !== 0 && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
};

export default Home;