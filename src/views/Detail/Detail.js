import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogCard from '../../components/blogs/BlogCard/BlogCard.js';

import { getBlogById } from '../../services/blogs.js';

export default function Detail() {
  // extract the blog id from the router params
  const { id } = useParams();

  // load the blog data using a useEffect, and useState
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogById(id);
      setBlogData(resp);
    };
    fetchData();
  }, []);

  // display the BlogCard passing the blog attributes as parameters

  // Add a link to the edit page

  return (
    <>
      <BlogCard {...blogData} />
      <Link to={`${id}/edit`}>Edit Blog</Link>
    </>
  );
}

