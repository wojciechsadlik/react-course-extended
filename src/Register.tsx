import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [author, setAuthor] = useState("Author 1");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setIsPending(true);

    fetch("http://localhost:8000/authors", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({author: author})
    }).then(() => {
      setIsPending(false);
      console.log("new author registered");

      navigate("/");
    }).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="register">
      <h2>Register Author</h2>
      <form onSubmit={handleSubmit}>
        <label>Author name:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        { !isPending && <button>Register</button> }
        { isPending && <button disabled>Adding Author...</button> }
      </form>
    </div>
  );
};

export default Register;