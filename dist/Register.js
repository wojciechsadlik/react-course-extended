import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [author, setAuthor] = useState("Author 1");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        fetch("http://localhost:8000/authors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ author: author })
        }).then((res) => {
            if (!res.ok)
                throw Error(`Could not register: ${res.status}, ${res.statusText}`);
            setIsPending(false);
            console.log("new author registered");
            navigate("/");
        }).catch((e) => {
            setIsPending(false);
            console.log(e);
            setError(e.message);
        });
    };
    return (React.createElement("div", { className: "register" },
        React.createElement("h2", null, "Register Author"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("label", null, "Author name:"),
            React.createElement("input", { type: "text", required: true, value: author, onChange: (e) => setAuthor(e.target.value) }),
            error && React.createElement("div", null, error),
            !isPending && React.createElement("button", null, "Register"),
            isPending && React.createElement("button", { disabled: true }, "Adding Author..."))));
};
export default Register;
