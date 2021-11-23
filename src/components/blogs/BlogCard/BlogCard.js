import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

export default function BlogCard({ id, title, subtitle, text, image }) {
  return (
    <div className="blog-card">
      <div className="details">
        <Link to={`/blogs/${id}`}>
          <div className="title">{title}</div>
        </Link>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
      </div>
      <div className="image">
        <img src={image}/>
      </div>
    </div>
  );
}
