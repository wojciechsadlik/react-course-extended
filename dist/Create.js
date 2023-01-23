var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const _a = useFetch("http://localhost:8000/authors"), { data: authors } = _a, authorsFetchStatus = __rest(_a, ["data"]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            console.log("new blog added");
            navigate("/");
        }).catch((e) => {
            console.log(e);
        });
    };
    return (React.createElement("div", { className: "create" },
        React.createElement("h2", null, "Add a New Blog"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("label", null, "Blog title:"),
            React.createElement("input", { type: "text", required: true, value: title, onChange: (e) => setTitle(e.target.value) }),
            React.createElement("label", null, "Blog body:"),
            React.createElement("textarea", { required: true, value: body, onChange: (e) => setBody(e.target.value) }),
            React.createElement("label", null, "Blog author:"),
            authorsFetchStatus.isPending && React.createElement("div", null, "Loading authors..."),
            authorsFetchStatus.error && React.createElement("div", null, authorsFetchStatus.error),
            !authorsFetchStatus.isPending && authors
                && React.createElement("select", { onChange: (e) => setAuthor(e.target.value) }, authors.map((author) => (React.createElement("option", { value: author.author, key: author.id }, author.author)))),
            !isPending && React.createElement("button", null, "Add blog"),
            isPending && React.createElement("button", { disabled: true }, "Adding blog..."))));
};
export default Create;
