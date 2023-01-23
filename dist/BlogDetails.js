import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate();
    const handleDeleteClick = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate("/");
        });
    };
    return (React.createElement("div", { className: "blog-details" },
        isPending && React.createElement("div", null, "Loading..."),
        error && React.createElement("div", null, error),
        blog && (React.createElement("article", null,
            React.createElement("h2", null, blog.title),
            React.createElement("h3", null,
                "Written by ",
                blog.author),
            React.createElement("h4", null,
                "On ",
                blog.date.toLocaleString()),
            React.createElement("div", null, blog.body),
            React.createElement("button", { onClick: handleDeleteClick }, "Delete")))));
};
export default BlogDetails;
