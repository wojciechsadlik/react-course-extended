import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (React.createElement("nav", { className: "navbar" },
        React.createElement("div", { className: "title" },
            React.createElement("h1", null, "Simple Blog"),
            React.createElement("br", null),
            React.createElement("p", null, "Net Ninja React Course")),
        React.createElement("div", { className: "links" },
            React.createElement(Link, { to: "/" }, "Home"),
            React.createElement(Link, { to: "/create" }, "New Blog"),
            React.createElement(Link, { to: "/register" }, "Register Author"))));
};
export default Navbar;
