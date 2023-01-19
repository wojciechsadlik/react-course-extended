import React, {useState, useEffect} from 'react';
import BlogList from './BlogList';
import IBlogEntry from './IBlogEntry';

const Home = () => {
  const [blogs, setBlogs] = useState(Array<IBlogEntry>());
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs.length !== 0 && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}

export default Home;