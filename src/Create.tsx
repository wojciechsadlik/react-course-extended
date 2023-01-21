import React from 'react';

const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
        />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="author1">author1</option>
          <option value="author2">author2</option>
          <option value="author3">author3</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;