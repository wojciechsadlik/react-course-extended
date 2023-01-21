import React, { SyntheticEvent, useState } from 'react';
import IBlogEntry from './IBlogEntry';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("author1");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const blog = {title, body, author};
    
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      console.log("new blog added");
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="author1">author1</option>
          <option value="author2">author2</option>
          <option value="author3">author3</option>
        </select>
        { !isPending && <button>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
};

export default Create;