import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Register from './Register';
function App() {
    return (React.createElement(Router, null,
        React.createElement("div", { className: "App" },
            React.createElement(Navbar, null),
            React.createElement("div", { className: "content" },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                    React.createElement(Route, { path: "/create", element: React.createElement(Create, null) }),
                    React.createElement(Route, { path: "/blogs/:id", element: React.createElement(BlogDetails, null) }),
                    React.createElement(Route, { path: "/register", element: React.createElement(Register, null) }),
                    React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) }))))));
}
export default App;
