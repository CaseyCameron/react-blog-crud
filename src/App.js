import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail.js';

import { getBlogs } from './services/blogs';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <div className="main">
          <Route path='/'>
            <Home blogs={blogs} />
          </Route>
          <Route path='/blogs/:id'>
            <DetailPage />
          </Route>
        </div>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
