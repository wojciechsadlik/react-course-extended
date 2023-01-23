import React, { SyntheticEvent, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { IAuthorGet } from './IAuthor';
import {IBlogEntryPost} from './IBlogEntry';
import useFetch from './useFetch';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const {data: authors, ...authorsFetchStatus}
    = useFetch<IAuthorGet[]>("http://localhost:8000/authors");

  useEffect(() => {
    if (!authorsFetchStatus.isPending
    && authors) {
      setAuthor(authors[0].author);  
    }
  }, [authorsFetchStatus.isPending, authors]);

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
        {authorsFetchStatus.isPending && <div>Loading authors...</div>}
        {authorsFetchStatus.error && <div>{authorsFetchStatus.error}</div>}
        {!authorsFetchStatus.isPending && authors
          && <select 
              onChange={(e) => setAuthor(e.target.value)}
              defaultValue={authors[0].author}
            >
            { 
              authors.map((author) => (
              <option
                value={author.author}
                key={author.id}
              >
                {author.author}
              </option>
            ))}
        </select>}
        { !isPending && <button>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
};

export default Create;