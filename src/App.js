import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './views/Home/Home'; 

import { getBlogs } from './services/blogs';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    const fetchData = async()=>{
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <Home blogs={blogs} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
