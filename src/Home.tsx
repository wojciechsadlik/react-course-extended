import React from 'react';
import BlogList from './BlogList';
import {IBlogEntryGet} from './IBlogEntry';
import useFetch, { IUseFetchOutProps } from './useFetch';

const Home = () => {
  const {data: blogs, isPending, error}: IUseFetchOutProps<IBlogEntryGet[]>
    = useFetch<IBlogEntryGet[]>("http://localhost:8000/blogs");
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
};

export default Home;