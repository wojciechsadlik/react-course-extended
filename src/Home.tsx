import React, {useState} from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog 1", body: "Blog 1 Body ...", author: "Author 1", id: 1 },
    { title: "Blog 2", body: "Blog 2 Body ...", author: "Author 2", id: 2 },
    { title: "Blog 3", body: "Blog 3 Body ...", author: "Author 1", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}

export default Home;