import { createContext, useState } from 'react';
import './App.css';

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}></BlogContext.Provider>
  );
}

export default App;
