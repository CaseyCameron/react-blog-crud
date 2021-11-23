import React from 'react';

import BlogCard from '../../components/blogs/BlogCard/BlogCard';

export default function Home({ blogs }) {
  return (
    <div>
      { blogs.map(blog=><BlogCard {...blog} key={blog.id}/>) }
    </div>
  );
}
