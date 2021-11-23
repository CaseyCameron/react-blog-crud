import React from 'react';

import './BlogForm.css';

export default function BlogForm({
  blog,
  handleChange,
  handleSubmit
}) {
  
  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" value={blog.title} name="title" onChange={handleChange} />
        <label>Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={blog.subtitle} name="subtitle" onChange={handleChange} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <input type="text" value={blog.text} name="text" onChange={handleChange} />
        <label>Text</label>
      </div>
      <div className="form-control">
        <input type="text" value={blog.image} name="image" onChange={handleChange} />
        <label>Image</label>
      </div>
      <button>Update Blog</button>
    </form>
  );
}
