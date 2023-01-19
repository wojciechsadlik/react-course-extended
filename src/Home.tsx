import React, {SyntheticEvent, useState} from 'react';

const Home = () => {
  const [name, setName] = useState("Name");
  const [clicks, setClicks] = useState(0);

  const handleClick = (e: SyntheticEvent) => {
    setName("Other Name");
  };

  const incrementClicks = (e: SyntheticEvent) => {
    setClicks(clicks + 1);
  };

  const decrementClicks = (e: SyntheticEvent) => {
    setClicks(clicks - 1);
  };

  return (
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <p>{name}</p>
        <button onClick={incrementClicks}>Increment Clicks</button>
        <button onClick={decrementClicks}>Decrement Clicks</button>
        <p>{clicks}</p>
    </div>
  );
}

export default Home;