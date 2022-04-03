import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import BlogDetails from './components/BlogDetails/BlogDetails';

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
