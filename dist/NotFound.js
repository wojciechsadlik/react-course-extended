import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (React.createElement("div", { className: "not-found" },
        React.createElement("h2", null, "Sorry"),
        React.createElement("p", null, "That page cannot be found"),
        React.createElement(Link, { to: "/" }, "Back to the homepage...")));
};
export default NotFound;
