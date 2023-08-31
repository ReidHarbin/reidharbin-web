import './App.css';
import React from 'react'
import { NavLink } from "react-router-dom";



import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Contact from './pages/contact';
import Blog from './pages/blog';
import Home from './pages/home';
import Projects from './pages/projects';
import Post from './pages/post';

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen font-ArchivoBlack">
                <div className="bg-gray-700 p-2">
                    <div className="flex justify-end text-white text-lg">
                        <NavLink className="px-3 " to="/">Home</NavLink>
                        <NavLink className="px-3 " to="/projects">Projects</NavLink>
                        <NavLink className="px-3 " to="/blog">Blog</NavLink>
                        <NavLink className="px-3 " to="/contact">Contact</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:postFile' element={<Post />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </div>
        </Router>

  );
}

export default App;
