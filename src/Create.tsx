import React, { SyntheticEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {IBlogEntryPost} from './IBlogEntry';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Author 1");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const blog: IBlogEntryPost = {title, body, author};
    
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      console.log("new blog added");

      navigate("/");
    }).catch((e) => {
      console.log(e);
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
          <option value="Author 1">Author 1</option>
          <option value="Author 2">Author 2</option>
          <option value="Author 3">Author 3</option>
        </select>
        { !isPending && <button>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
};

export default Create;