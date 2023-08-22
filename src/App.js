import './App.css';
import React from 'react'
import { NavLink } from "react-router-dom";



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen font-ArchivoBlack">

                <div className="bg-green-800 ">
                    <div className="flex justify-end">
                        <NavLink className="text-white text-lg px-3 " to="pages/home">Home</NavLink>
                        <NavLink className="text-white text-lg px-3 " to="pages/projects">Projects</NavLink>
                        <NavLink className="text-white text-lg px-3 " to="pages/blog">Blog</NavLink>
                        <NavLink className="text-white text-lg px-3 " to="pages/about">About</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path='pages/home' element={<Home/>} />
                    <Route path='pages/about' element={<About/>} />
                    <Route path='pages/projects' element={<Projects/>} />
                    <Route path='pages/blog' element={<Blog />} />
                </Routes>

            </div>
        </Router>

  );
}

export default App;
