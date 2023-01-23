import React from 'react';
import { Link } from 'react-router-dom';
const BlogList = ({ blogs, title }) => {
    return (React.createElement("div", { className: "blog-list" },
        React.createElement("h2", null, title),
        blogs.map((blog) => (React.createElement("div", { className: "blog-preview", key: blog.id },
            React.createElement(Link, { to: `/blogs/${blog.id}` },
                React.createElement("h2", null, blog.title),
                React.createElement("p", null,
                    "Written by ",
                    blog.author,
                    " on ",
                    blog.date.toLocaleString())))))));
};
export default BlogList;
