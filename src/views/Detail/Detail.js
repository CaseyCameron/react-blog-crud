import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getBlogById } from '../../services/blogs.js';

export default function Detail() {
  // extract the blog id from the router params
  const { id } = useParams();
  console.log(id);
  // load the blog data using a useEffect, and useState
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogById(id);
      setBlogData(resp);
    };
    fetchData();
  }, []);

  console.log(blogData);

  // display the BlogCard passing the blog attributes as parameters
  // Add a link to the edit page

  return (
    <div>Detail Page</div>
  );
}

