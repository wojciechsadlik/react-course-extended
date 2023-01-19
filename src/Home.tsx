import React, {useState, useEffect} from 'react';
import BlogList from './BlogList';
import IBlogEntry from './IBlogEntry';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch blogs");
        }
        
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setError(null);
        setBlogs(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}

export default Home;