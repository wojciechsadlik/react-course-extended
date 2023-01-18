import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <h1>Simple Blog</h1><br />
        <p>Net Ninja React Course</p>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;