import React, {useState, useEffect} from 'react';
import BlogList from './BlogList';
import IBlogEntry from './IBlogEntry';

const Home = () => {
  const blogs: IBlogEntry[] = [];

  const [blogsState, setBlogsState] = useState(blogs);

  const handleDelete = (id: number) => {
    const newBlogsState = blogsState.filter(blog => blog.id !== id);
    setBlogsState(newBlogsState);
  }

  useEffect(() => {
    console.log("use effect ran");
  });

  return (
    <div className="home">
      <BlogList blogs={blogsState} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;