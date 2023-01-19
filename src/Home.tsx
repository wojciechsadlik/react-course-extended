import React, { SyntheticEvent } from 'react';

const Home = () => {
  const handleClick = (e: SyntheticEvent) => {
    console.log("handleClick is working", e);
  };

  const handleClick2 = (name: string, e: SyntheticEvent) => {
    console.log("handleClick " + name, e);
  };

  return (
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => {
          handleClick2("Name", e);
        }}>Click me 2</button>
    </div>
  );
}

export default Home;