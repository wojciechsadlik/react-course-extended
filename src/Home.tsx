import React, {useState} from 'react';
import BlogList from './BlogList';
import BlogPreview from './IBlogPreview';

const Home = () => {
  const blogs: BlogPreview[] = [
    { title: "Blog 1", body: "Blog 1 Body ...", author: "Author 1", id: 1 },
    { title: "Blog 2", body: "Blog 2 Body ...", author: "Author 2", id: 2 },
    { title: "Blog 3", body: "Blog 3 Body ...", author: "Author 1", id: 3 },
  ];

  const [blogsState, setBlogs] = useState(blogs);

  return (
    <div className="home">
      <BlogList blogs={blogsState} title="All Blogs"/>
    </div>
  );
}

export default Home;