import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <h1>Simple Blog</h1>
        <p>Net Ninja React Course Extended</p>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/register">Register Author</Link>
      </div>
    </nav>
  );
};

export default Navbar;