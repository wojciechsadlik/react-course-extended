import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    return (React.createElement("div", { className: "home" },
        error && React.createElement("div", null, error),
        isPending && React.createElement("div", null, "Loading..."),
        blogs && React.createElement(BlogList, { blogs: blogs, title: "All Blogs" })));
};
export default Home;
