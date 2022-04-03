import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../App';
import Blog from '../Blog/Blog';

const Home = () => {
  const [blogs, setBlogs] = useContext(BlogContext);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (
    <div className="blogs-container">
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Home;
